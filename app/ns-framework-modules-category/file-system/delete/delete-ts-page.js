"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("tns-core-modules/data/observable");
var file_system_1 = require("tns-core-modules/file-system");
var file;
var myFolder;
function onNavigatingTo(args) {
    var page = args.object;
    var vm = new observable_1.Observable();
    var documents = file_system_1.knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("myFolderPath", myFolder.path);
    vm.set("myFilePath", file.path);
    vm.set("resultMessage", "");
    page.bindingContext = vm;
}
exports.onNavigatingTo = onNavigatingTo;
function onDeleteFile(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (file) {
        file.remove()
            .then(function (res) {
            vm.set("resultMessage", "File successfully deleted!");
        }).catch(function (err) {
            console.log(err.stack);
        });
    }
    else {
        vm.set("resultMessage", "Already deleted file!");
    }
}
exports.onDeleteFile = onDeleteFile;
function onDeleteFolder(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (myFolder) {
        myFolder.remove()
            .then(function (fres) {
            vm.set("resultMessage", "Folder successfully deleted!");
        }).catch(function (err) {
            console.log(err.stack);
        });
    }
    else {
        vm.set("resultMessage", "Already deleted folder!");
    }
}
exports.onDeleteFolder = onDeleteFolder;
function onClearFolder(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    if (myFolder) {
        myFolder.clear()
            .then(function (res) {
            vm.set("resultMessage", "Folder successfully cleared!");
        }).catch(function (err) {
            console.log(err.stack);
        });
    }
    else {
        vm.set("resultMessage", "Cannot clear already deleted folder!");
    }
}
exports.onClearFolder = onClearFolder;
function onReset(args) {
    var page = args.object.page;
    var vm = page.bindingContext;
    var documents = file_system_1.knownFolders.documents();
    myFolder = documents.getFolder("TestFolderName");
    file = myFolder.getFile("TestFileName.txt");
    vm.set("resultMessage", "Reset");
}
exports.onReset = onReset;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkZWxldGUtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLCtEQUE4RDtBQUM5RCw0REFBMEU7QUFHMUUsSUFBSSxJQUFVLENBQUM7QUFDZixJQUFJLFFBQWdCLENBQUM7QUFDckIsd0JBQStCLElBQUk7SUFDL0IsSUFBTSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNyQyxJQUFNLEVBQUUsR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztJQUM1QixJQUFNLFNBQVMsR0FBbUIsMEJBQVksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMzRCxRQUFRLEdBQVcsU0FBUyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3pELElBQUksR0FBUyxRQUFRLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUM7SUFDbEQsRUFBRSxDQUFDLEdBQUcsQ0FBQyxjQUFjLEVBQUUsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3RDLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztBQUM3QixDQUFDO0FBVkQsd0NBVUM7QUFFRCxzQkFBNkIsSUFBSTtJQUM3QixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFFUCxJQUFJLENBQUMsTUFBTSxFQUFFO2FBQ1IsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUVOLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDRCQUE0QixDQUFDLENBQUM7UUFDMUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztJQUNyRCxDQUFDO0FBQ0wsQ0FBQztBQWhCRCxvQ0FnQkM7QUFFRCx3QkFBK0IsSUFBSTtJQUMvQixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFHWCxRQUFRLENBQUMsTUFBTSxFQUFFO2FBQ1osSUFBSSxDQUFDLFVBQUMsSUFBSTtZQUVQLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUseUJBQXlCLENBQUMsQ0FBQztJQUN2RCxDQUFDO0FBQ0wsQ0FBQztBQWpCRCx3Q0FpQkM7QUFFRCx1QkFBOEIsSUFBSTtJQUM5QixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLEVBQUUsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFFWCxRQUFRLENBQUMsS0FBSyxFQUFFO2FBQ1gsSUFBSSxDQUFDLFVBQUMsR0FBRztZQUVOLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLDhCQUE4QixDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUMsR0FBRztZQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLENBQUMsQ0FBQyxDQUFDO0lBRVgsQ0FBQztJQUFDLElBQUksQ0FBQyxDQUFDO1FBQ0osRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsc0NBQXNDLENBQUMsQ0FBQztJQUNwRSxDQUFDO0FBQ0wsQ0FBQztBQWhCRCxzQ0FnQkM7QUFFRCxpQkFBd0IsSUFBSTtJQUN4QixJQUFNLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQztJQUMxQyxJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDO0lBQy9CLElBQU0sU0FBUyxHQUFtQiwwQkFBWSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQzNELFFBQVEsR0FBVyxTQUFTLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUM7SUFDekQsSUFBSSxHQUFTLFFBQVEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsQ0FBQztJQUNsRCxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxPQUFPLENBQUMsQ0FBQztBQUNyQyxDQUFDO0FBUEQsMEJBT0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XG5pbXBvcnQgeyBrbm93bkZvbGRlcnMsIEZpbGUsIEZvbGRlciB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ZpbGUtc3lzdGVtXCI7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xuXG5sZXQgZmlsZTogRmlsZTtcbmxldCBteUZvbGRlcjogRm9sZGVyO1xuZXhwb3J0IGZ1bmN0aW9uIG9uTmF2aWdhdGluZ1RvKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc3Qgdm0gPSBuZXcgT2JzZXJ2YWJsZSgpO1xuICAgIGNvbnN0IGRvY3VtZW50czogRm9sZGVyID0gPEZvbGRlcj5rbm93bkZvbGRlcnMuZG9jdW1lbnRzKCk7XG4gICAgbXlGb2xkZXIgPSA8Rm9sZGVyPmRvY3VtZW50cy5nZXRGb2xkZXIoXCJUZXN0Rm9sZGVyTmFtZVwiKTtcbiAgICBmaWxlID0gPEZpbGU+bXlGb2xkZXIuZ2V0RmlsZShcIlRlc3RGaWxlTmFtZS50eHRcIik7XG4gICAgdm0uc2V0KFwibXlGb2xkZXJQYXRoXCIsIG15Rm9sZGVyLnBhdGgpO1xuICAgIHZtLnNldChcIm15RmlsZVBhdGhcIiwgZmlsZS5wYXRoKTtcbiAgICB2bS5zZXQoXCJyZXN1bHRNZXNzYWdlXCIsIFwiXCIpO1xuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSB2bTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uRGVsZXRlRmlsZShhcmdzKSB7XG4gICAgY29uc3QgcGFnZTogUGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0LnBhZ2U7XG4gICAgY29uc3Qgdm0gPSBwYWdlLmJpbmRpbmdDb250ZXh0O1xuICAgIGlmIChmaWxlKSB7XG4gICAgICAgIC8vID4+IGZzLWRlbGV0ZS1maWxlLWNvZGUtdHNcbiAgICAgICAgZmlsZS5yZW1vdmUoKVxuICAgICAgICAgICAgLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3MgcmVtb3ZpbmcgdGhlIGZpbGUuXG4gICAgICAgICAgICAgICAgdm0uc2V0KFwicmVzdWx0TWVzc2FnZVwiLCBcIkZpbGUgc3VjY2Vzc2Z1bGx5IGRlbGV0ZWQhXCIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gPDwgZnMtZGVsZXRlLWZpbGUtY29kZS10c1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZtLnNldChcInJlc3VsdE1lc3NhZ2VcIiwgXCJBbHJlYWR5IGRlbGV0ZWQgZmlsZSFcIik7XG4gICAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gb25EZWxldGVGb2xkZXIoYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICBpZiAobXlGb2xkZXIpIHtcbiAgICAgICAgLy8gPj4gZnMtZGVsZXRlLWZvbGRlci1jb2RlLXRzXG4gICAgICAgIC8vIFJlbW92ZSBhIGZvbGRlciBhbmQgcmVjdXJzaXZlbHkgaXRzIGNvbnRlbnQuXG4gICAgICAgIG15Rm9sZGVyLnJlbW92ZSgpXG4gICAgICAgICAgICAudGhlbigoZnJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3MgcmVtb3ZpbmcgdGhlIGZvbGRlci5cbiAgICAgICAgICAgICAgICB2bS5zZXQoXCJyZXN1bHRNZXNzYWdlXCIsIFwiRm9sZGVyIHN1Y2Nlc3NmdWxseSBkZWxldGVkIVwiKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIuc3RhY2spO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIC8vIDw8IGZzLWRlbGV0ZS1mb2xkZXItY29kZS10c1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHZtLnNldChcInJlc3VsdE1lc3NhZ2VcIiwgXCJBbHJlYWR5IGRlbGV0ZWQgZm9sZGVyIVwiKTtcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbkNsZWFyRm9sZGVyKGFyZ3MpIHtcbiAgICBjb25zdCBwYWdlOiBQYWdlID0gPFBhZ2U+YXJncy5vYmplY3QucGFnZTtcbiAgICBjb25zdCB2bSA9IHBhZ2UuYmluZGluZ0NvbnRleHQ7XG4gICAgaWYgKG15Rm9sZGVyKSB7XG4gICAgICAgIC8vID4+IGZzLWNsZWFyLWZvbGRlci1jb2RlLXRzXG4gICAgICAgIG15Rm9sZGVyLmNsZWFyKClcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBTdWNjZXNzZnVsbHkgY2xlYXJlZCB0aGUgZm9sZGVyLlxuICAgICAgICAgICAgICAgIHZtLnNldChcInJlc3VsdE1lc3NhZ2VcIiwgXCJGb2xkZXIgc3VjY2Vzc2Z1bGx5IGNsZWFyZWQhXCIpO1xuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVyci5zdGFjayk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgLy8gPDwgZnMtY2xlYXItZm9sZGVyLWNvZGUtdHNcbiAgICB9IGVsc2Uge1xuICAgICAgICB2bS5zZXQoXCJyZXN1bHRNZXNzYWdlXCIsIFwiQ2Fubm90IGNsZWFyIGFscmVhZHkgZGVsZXRlZCBmb2xkZXIhXCIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9uUmVzZXQoYXJncykge1xuICAgIGNvbnN0IHBhZ2U6IFBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdC5wYWdlO1xuICAgIGNvbnN0IHZtID0gcGFnZS5iaW5kaW5nQ29udGV4dDtcbiAgICBjb25zdCBkb2N1bWVudHM6IEZvbGRlciA9IDxGb2xkZXI+a25vd25Gb2xkZXJzLmRvY3VtZW50cygpO1xuICAgIG15Rm9sZGVyID0gPEZvbGRlcj5kb2N1bWVudHMuZ2V0Rm9sZGVyKFwiVGVzdEZvbGRlck5hbWVcIik7XG4gICAgZmlsZSA9IDxGaWxlPm15Rm9sZGVyLmdldEZpbGUoXCJUZXN0RmlsZU5hbWUudHh0XCIpO1xuICAgIHZtLnNldChcInJlc3VsdE1lc3NhZ2VcIiwgXCJSZXNldFwiKTtcbn1cblxuIl19