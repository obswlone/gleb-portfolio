"use client";

import { Component, createContext } from "react";

export type Theme = "dark" | "light";

type ThemeContextValue = {
  theme: Theme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  toggleTheme: () => {},
});

ThemeContext.displayName = "Theme";

function applyTheme(theme: Theme) {
  document.documentElement.classList.toggle("dark", theme === "dark");
  localStorage.setItem("theme", theme);
}

type Props = {
  children: React.ReactNode;
};

export class ThemeProvider extends Component<Props, ThemeContextValue> {
  constructor(props: Props) {
    super(props);

    this.toggleTheme = this.toggleTheme.bind(this);

    this.state = {
      theme: "dark",
      toggleTheme: this.toggleTheme,
    };
  }

  componentDidMount() {
    const stored = localStorage.getItem("theme");
    const theme: Theme = stored === "light" ? "light" : "dark";

    if (theme !== this.state.theme) {
      this.setState({ theme });
    }
  }

  componentDidUpdate(_prevProps: Props, prevState: ThemeContextValue) {
    if (prevState.theme !== this.state.theme) {
      applyTheme(this.state.theme);
    }
  }

  toggleTheme() {
    this.setState((state) => ({
      theme: state.theme === "dark" ? "light" : "dark",
    }));
  }

  render() {
    return (
      <ThemeContext.Provider value={this.state}>
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
