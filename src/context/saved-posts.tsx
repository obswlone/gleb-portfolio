"use client";

import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  type Dispatch,
} from "react";

const STORAGE_KEY = "saved-posts";

type SavedPostsState = {
  ids: string[];
  loaded: boolean;
};

type SavedPostsAction =
  | { type: "loaded"; ids: string[] }
  | { type: "added"; id: string }
  | { type: "deleted"; id: string };

const initialState: SavedPostsState = {
  ids: [],
  loaded: false,
};

const SavedPostsContext = createContext<string[] | null>(null);
const SavedPostsDispatchContext = createContext<Dispatch<SavedPostsAction> | null>(
  null,
);

export function SavedPostsProvider({ children }: { children: React.ReactNode }) {
  const [saved, dispatch] = useReducer(savedPostsReducer, initialState);

  useEffect(() => {
    dispatch({ type: "loaded", ids: readStoredIds() });
  }, []);

  useEffect(() => {
    if (!saved.loaded) {
      return;
    }

    localStorage.setItem(STORAGE_KEY, JSON.stringify(saved.ids));
  }, [saved.ids, saved.loaded]);

  return (
    <SavedPostsContext value={saved.ids}>
      <SavedPostsDispatchContext value={dispatch}>{children}</SavedPostsDispatchContext>
    </SavedPostsContext>
  );
}

export function useSavedPosts() {
  const savedIds = useContext(SavedPostsContext);

  if (savedIds === null) {
    throw new Error("useSavedPosts must be used within SavedPostsProvider");
  }

  return savedIds;
}

export function useSavedPostsDispatch() {
  const dispatch = useContext(SavedPostsDispatchContext);

  if (dispatch === null) {
    throw new Error("useSavedPostsDispatch must be used within SavedPostsProvider");
  }

  return dispatch;
}

function savedPostsReducer(saved: SavedPostsState, action: SavedPostsAction) {
  switch (action.type) {
    case "loaded": {
      return { ids: action.ids, loaded: true };
    }
    case "added": {
      if (saved.ids.includes(action.id)) {
        return saved;
      }

      return { ...saved, ids: [...saved.ids, action.id] };
    }
    case "deleted": {
      return { ...saved, ids: saved.ids.filter((id) => id !== action.id) };
    }
    default: {
      throw Error(`Unknown action: ${(action as SavedPostsAction).type}`);
    }
  }
}

function readStoredIds() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return [];
    }

    return parsed.filter((id): id is string => typeof id === "string");
  } catch {
    return [];
  }
}
