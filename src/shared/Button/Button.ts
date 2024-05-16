interface Props {
  textContent?: string
  type?: "button" | "submit" | "reset"
  onclick?: (ev: MouseEvent) => void
}

export function Button({ textContent, type, onclick }: Props) {
  const button = document.createElement("button")
  if (textContent) button.textContent = textContent
  if (type) button.type = type
  if (onclick) button.onclick = onclick

  return button
}
