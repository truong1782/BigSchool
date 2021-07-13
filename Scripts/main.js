function confirmAction() {
	let dialog = confirm("Xác nhận xóa ?");
	if (dialog == true) {
		return true;
	} else {
		return false;
	}
}