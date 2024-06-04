# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## Documentation
Simple functional to-do-lists
![Screenshot 2024-06-04 112347](https://github.com/rifaset123/To-Do-Lists_React-Tailwind/assets/134784642/bf323855-2312-4239-9c93-237705cfdd06)

Add new list
![Screenshot 2024-06-04 112407](https://github.com/rifaset123/To-Do-Lists_React-Tailwind/assets/134784642/5083a96f-49ca-4987-ac2b-b7265ccadccc)

Checkmark and summary list
![Screenshot 2024-06-04 112415](https://github.com/rifaset123/To-Do-Lists_React-Tailwind/assets/134784642/759e86ea-87ef-4e99-b992-1f186e659f83)



