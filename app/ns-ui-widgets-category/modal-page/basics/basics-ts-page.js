"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var modalPageModulets = "/ns-ui-widgets-category/modal-page/basics/modal-ts-page";
function openModal(args) {
    var mainView = args.object;
    var context = { username: "test_username", password: "test" };
    var fullscreen = true;
    mainView.showModal(modalPageModulets, context, function (username, password) {
        alert("Username: " + username + " : Password: " + password);
    }, fullscreen);
}
exports.openModal = openModal;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzaWNzLXRzLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJiYXNpY3MtdHMtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUdBLElBQU0saUJBQWlCLEdBQUcseURBQXlELENBQUM7QUFFcEYsbUJBQTBCLElBQUk7SUFDMUIsSUFBTSxRQUFRLEdBQW1CLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDN0MsSUFBTSxPQUFPLEdBQUcsRUFBRSxRQUFRLEVBQUUsZUFBZSxFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUUsQ0FBQztJQUNoRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUM7SUFDeEIsUUFBUSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsRUFBRSxPQUFPLEVBQUUsVUFBQyxRQUFRLEVBQUUsUUFBUTtRQUU5RCxLQUFLLENBQUMsZUFBYSxRQUFRLHFCQUFnQixRQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDbkIsQ0FBQztBQVJELDhCQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLy8gPj4gbWFpbi1wYWdlLXRzXG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9idXR0b25cIjtcblxuY29uc3QgbW9kYWxQYWdlTW9kdWxldHMgPSBcIi9ucy11aS13aWRnZXRzLWNhdGVnb3J5L21vZGFsLXBhZ2UvYmFzaWNzL21vZGFsLXRzLXBhZ2VcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5Nb2RhbChhcmdzKSB7XG4gICAgY29uc3QgbWFpblZpZXc6IEJ1dHRvbiA9IDxCdXR0b24+YXJncy5vYmplY3Q7XG4gICAgY29uc3QgY29udGV4dCA9IHsgdXNlcm5hbWU6IFwidGVzdF91c2VybmFtZVwiLCBwYXNzd29yZDogXCJ0ZXN0XCIgfTtcbiAgICBjb25zdCBmdWxsc2NyZWVuID0gdHJ1ZTtcbiAgICBtYWluVmlldy5zaG93TW9kYWwobW9kYWxQYWdlTW9kdWxldHMsIGNvbnRleHQsICh1c2VybmFtZSwgcGFzc3dvcmQpID0+IHtcbiAgICAgICAgLy8gUmVjZWl2ZSBkYXRhIGZyb20gdGhlIG1vZGFsIHBhZ2UuIGUuZy4gdXNlcm5hbWUgJiBwYXNzd29yZFxuICAgICAgICBhbGVydChgVXNlcm5hbWU6ICR7dXNlcm5hbWV9IDogUGFzc3dvcmQ6ICR7cGFzc3dvcmR9YCk7XG4gICAgfSwgZnVsbHNjcmVlbik7XG59XG4vLyA8PCBtYWluLXBhZ2UtdHNcbiJdfQ==