// import { filterOptions } from "@/config";
// import { Fragment } from "react";
// import { Label } from "../ui/label";
// import { Checkbox } from "../ui/checkbox";
// import { Separator } from "../ui/separator";

// function ProductFilter({ filters, handleFilter }) {
//   return (
//     <div className="bg-background rounded-lg shadow-sm">
//       <div className="p-4 border-b">
//         <h2 className="text-lg font-extrabold">Filters</h2>
//       </div>
//       <div className="p-4 space-y-4">
//         {Object.keys(filterOptions).map((keyItem) => (
//           <Fragment>
//             <div>
//               <h3 className="text-base font-bold">{keyItem}</h3>
//               <div className="grid gap-2 mt-2">
//                 {filterOptions[keyItem].map((option) => (
//                   <Label className="flex font-medium items-center gap-2 ">
//                     <Checkbox
//                       checked={
//                         filters &&
//                         Object.keys(filters).length > 0 &&
//                         filters[keyItem] &&
//                         filters[keyItem].indexOf(option.id) > -1
//                       }
//                     />
//                     {option.label}
//                   </Label>
//                 ))}
//               </div>
//             </div>
//             <Separator />
//           </Fragment>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ProductFilter;
import { filterOptions } from "@/config";
import { Fragment } from "react";
import { Label } from "../ui/label";
import { Checkbox } from "../ui/checkbox";
import { Separator } from "../ui/separator";

function ProductFilter({ filters, handleFilter }) {
  return (
    <div className="bg-white/60 backdrop-blur-md rounded-[2rem] border border-white/40 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-100 bg-white/40">
        <h2 className="text-sm font-black uppercase tracking-[0.2em] text-[#1f2937]">Filters</h2>
      </div>
      <div className="p-6 space-y-8">
        {Object.keys(filterOptions).map((keyItem) => (
          <Fragment key={keyItem}>
            <div>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-[#be185d] mb-4">
                {keyItem}
              </h3>
              <div className="grid gap-3">
                {filterOptions[keyItem].map((option) => (
                  <Label 
                    key={option.id}
                    className="flex items-center gap-3 text-xs font-bold text-[#4a554a] cursor-pointer group hover:text-[#be185d] transition-colors"
                  >
                    <Checkbox
                      className="border-[#d1d5db] data-[state=checked]:bg-[#be185d] data-[state=checked]:border-[#be185d] rounded-md transition-all"
                      checked={
                        filters &&
                        Object.keys(filters).length > 0 &&
                        filters[keyItem] &&
                        filters[keyItem].indexOf(option.id) > -1
                      }
                      onCheckedChange={() => handleFilter(keyItem, option.id)}
                    />
                    <span className="group-hover:translate-x-1 transition-transform uppercase tracking-tighter">
                      {option.label}
                    </span>
                  </Label>
                ))}
              </div>
            </div>
            <Separator className="bg-gray-100/50" />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ProductFilter;