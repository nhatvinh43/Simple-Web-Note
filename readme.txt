- Cách cài đặt:
	+ Thầy/cô hãy chạy file script DBScript.sql để tạo CSDL simple-note.
	+ Mặc định server sẽ tạo connection tới CSDL ở localhost tại port 3306, user là root và password 1234. Nếu thầy/cô cần thay đổi các thông số cho phù hợp thì thầy có thể chỉnh sửa tại file Source/utils/database.js.
	+ Để chạy server, thầy/cô hãy bật cửa sổ cmd và chuyển tới thư mục Source, gõ npm start, sau đó truy cập vào địa chỉ 127.0.0.1:8888 trên trình duyệt.

- Mô tả CSDL: gồm 1 bảng duy nhất là notes, gồm các cột: idNote (khóa chính), title, content, noteDate.

- Giới thiệu về ứng dụng:
	+ Đây là một ứng dụng ghi chú đơn giản, cho phép thêm và xem các ghi chú gần nhất (9 ghi chú).
	+ Ứng dụng phần front-end sử dụng ReactJS, back-end sử dụng framework ExpressJS, có sử dụng thêm thư viện Bootstrap 4.
	+ Mặc định CSDL sẽ có sẵn 5 ghi chú để tiện cho việc test.
	