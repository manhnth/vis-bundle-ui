// function toVal(mix) {
//   var k,
//     y,
//     str = '';

//   if (typeof mix === 'string' || typeof mix === 'number') {
//     str += mix;
//   } else if (typeof mix === 'object') {
//     if (Array.isArray(mix)) {
//       for (k = 0; k < mix.length; k++) {
//         if (mix[k]) {
//           if ((y = toVal(mix[k]))) {
//             str && (str += ' ');
//             str += y;
//           }
//         }
//       }
//     } else {
//       for (k in mix) {
//         if (mix[k]) {
//           str && (str += ' ');
//           str += k;
//         }
//       }
//     }
//   }

//   return str;
// }

// export function clsx() {
//   var i = 0,
//     tmp,
//     x,
//     str = '';
//   while (i < arguments.length) {
//     if ((tmp = arguments[i++])) {
//       if ((x = toVal(tmp))) {
//         str && (str += ' ');
//         str += x;
//       }
//     }
//   }
//   return str;
// }

// export default clsx;

type StringArg = string | number | null | undefined;
type ObjArg = Record<string, any>;
type ArrArg = Array<StringArg | ObjArg | ArrArg>;
export type ClsxArgs = Array<StringArg | ObjArg | ArrArg>;

export default function clsx(...args: ClsxArgs) {
  return args
    .reduce<Array<string | number>>((previousValue, currentValue) => {
      if (!currentValue) return previousValue;

      if (Array.isArray(currentValue)) {
        previousValue.concat(clsx(...currentValue));
        return previousValue;
      }

      if (typeof currentValue === 'object') {
        Object.entries(currentValue).forEach(([k, v]) => {
          if (v) previousValue.push(k);
        });
        return previousValue;
      }

      previousValue.push(currentValue);
      return previousValue;
    }, [])
    .join(' ');
}
