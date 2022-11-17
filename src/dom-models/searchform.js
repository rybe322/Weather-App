export const SearchForm = () => {
  const SearchFormRow = () => {
    const div = document.createElement("div");
    let label = document.createElement("label");
    let input = document.createElement("input");
    label.textContent = "Search";
    div.appendChild(label);
    div.appendChild(input);
    return div;
  };
  const FormSubmitButton = () => {
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Search";
    return button;
  };
  let form = document.createElement("form");
  form.appendChild(SearchFormRow());
  form.appendChild(FormSubmitButton());
  return form;
};
