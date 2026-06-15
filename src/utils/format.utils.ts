
export function formatToTitleCase(sentence: string): string {
  const args = sentence.split(' ');
  if(args.length === 0) return "";
  args[0] = args[0].charAt(0).toUpperCase() + args[0].slice(1).toLowerCase();
  return args.join(' ');
}