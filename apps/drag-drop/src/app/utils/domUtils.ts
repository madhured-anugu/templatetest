/* eslint-disable @typescript-eslint/no-explicit-any */
export function getClassStartsWith(el: HTMLElement, startsWith: string) {
  const classes: any = el.classList;
  const list = Array.from(classes.values());
  const predicate = (cl:any) => {
    return !!cl.startsWith(startsWith);
  };
  const dropParent: any = list.find(predicate);
  const dropCls = dropParent ? dropParent.split('-').pop() : '';
  return dropCls;
}
