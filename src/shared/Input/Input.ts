type Props = {
  type?: string
  placeholder?: string
  name?: string
  value?: string
  onchange?: ((this: GlobalEventHandlers, ev: Event) => any) | null
  onfocus?: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null
  onblur?: ((this: GlobalEventHandlers, ev: FocusEvent) => any) | null
}

export function Input({
  type,
  placeholder,
  name,
  value,
  onchange,
  onfocus,
  onblur,
}: Props) {
  const input = document.createElement("input")

  if (type) input.type = type
  if (placeholder) input.placeholder = placeholder
  if (name) input.name = name
  if (value) input.value = value
  if (onchange) input.onchange = onchange
  if (onfocus) input.onfocus = onfocus
  if (onblur) input.onblur = onblur

  return input
}
