"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
function onPageLoaded(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    vm.set("secondSwitchState", "ON");
    var mySwitch = page.getViewById("my-switch");
    mySwitch.on("checkedChange", function (swargs) {
        console.log("checkedChange ", swargs.object.checked);
        if (swargs.object.checked) {
            vm.set("secondSwitchState", "ON");
        }
        else {
            vm.set("secondSwitchState", "OFF");
        }
    });
    page.bindingContext = vm;
}
exports.onPageLoaded = onPageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUc5RCxzQkFBNkIsSUFBSTtJQUM3QixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3JDLElBQU0sRUFBRSxHQUFHLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBQzVCLEVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFHbEMsSUFBTSxRQUFRLEdBQW1CLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0QsUUFBUSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsVUFBQyxNQUFNO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLEVBQVcsTUFBTSxDQUFDLE1BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUvRCxFQUFFLENBQUMsQ0FBVSxNQUFNLENBQUMsTUFBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDbEMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDSixFQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUM7SUFFTCxDQUFDLENBQUMsQ0FBQztJQUVILElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO0FBQzdCLENBQUM7QUFuQkQsb0NBbUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcbmltcG9ydCB7IFN3aXRjaCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3N3aXRjaFwiO1xuZXhwb3J0IGZ1bmN0aW9uIG9uUGFnZUxvYWRlZChhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnN0IHZtID0gbmV3IE9ic2VydmFibGUoKTtcbiAgICB2bS5zZXQoXCJzZWNvbmRTd2l0Y2hTdGF0ZVwiLCBcIk9OXCIpO1xuICAgIC8vID4+IHN3aXRjaC1jaGVja2VkLWNoYW5nZS1ldmVudC10c1xuICAgIC8vIHNldCB1cCB0aGUgaW5pdGlhbCB2YWx1ZXMgZm9yIHRoZSBzd2l0Y2ggY29tcG9uZW50c1xuICAgIGNvbnN0IG15U3dpdGNoOiBTd2l0Y2ggPSA8U3dpdGNoPnBhZ2UuZ2V0Vmlld0J5SWQoXCJteS1zd2l0Y2hcIik7XG4gICAgbXlTd2l0Y2gub24oXCJjaGVja2VkQ2hhbmdlXCIsIChzd2FyZ3MpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2VkQ2hhbmdlIFwiLCAoPFN3aXRjaD5zd2FyZ3Mub2JqZWN0KS5jaGVja2VkKTtcbiAgICAgICAgLy8gPj4gKGhpZGUpXG4gICAgICAgIGlmICgoPFN3aXRjaD5zd2FyZ3Mub2JqZWN0KS5jaGVja2VkKSB7XG4gICAgICAgICAgICB2bS5zZXQoXCJzZWNvbmRTd2l0Y2hTdGF0ZVwiLCBcIk9OXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdm0uc2V0KFwic2Vjb25kU3dpdGNoU3RhdGVcIiwgXCJPRkZcIik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gPDwgKGhpZGUpXG4gICAgfSk7XG4gICAgLy8gPDwgc3dpdGNoLWNoZWNrZWQtY2hhbmdlLWV2ZW50LXRzXG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IHZtO1xufVxuIl19