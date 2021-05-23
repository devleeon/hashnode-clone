type Props = {
  txtarea: HTMLInputElement;
  before: string;
  after: string;
  startPos: number; // cursor position
  endPos?: number;
};
export const setCursor = ({
  txtarea,
  before,
  after,
  startPos,
  endPos,
}: Props) => {
  const start = txtarea!.selectionStart as number;
  const end = txtarea!.selectionEnd as number;
  const finText =
    txtarea.value.substring(0, start) +
    before +
    after +
    txtarea.value.substring(end);
  txtarea.value = finText;
  txtarea?.focus();

  if (endPos) {
    txtarea.setSelectionRange(end + startPos, end + endPos);
  } else {
    txtarea.selectionEnd = end + startPos;
  }
};
