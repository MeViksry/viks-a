export default [
  {
    files: ["src/js/**/*.js"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        window: "readonly",
        document: "readonly",
        navigator: "readonly",
        console: "readonly",
        setTimeout: "readonly",
        clearTimeout: "readonly",
        CustomEvent: "readonly",
        IntersectionObserver: "readonly",
        module: "readonly"
      }
    },
    rules: {
      "no-useless-escape": "off",
      "no-unused-vars": "warn",
      "no-undef": "warn"
    }
  }
];