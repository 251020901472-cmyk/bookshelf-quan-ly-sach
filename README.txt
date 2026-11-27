BOOKSHELF – WEBSITE QUẢN LÝ SÁCH

CẤU TRÚC:
- index.html: Trang chủ
- books.html: Thêm, tìm kiếm, lọc, đổi trạng thái và xóa sách
- contact.html: Trang liên hệ
- common.css: CSS dùng chung cho cả 3 trang
- books.js: Chức năng quản lý sách bằng localStorage
- covers/: Hình minh họa SVG

CÁCH CHẠY:
1. Giải nén file ZIP.
2. Mở thư mục bằng Visual Studio Code.
3. Cài tiện ích Live Server nếu chưa có.
4. Nhấp phải index.html → Open with Live Server.
5. Dùng menu để chuyển qua 3 trang.

TIÊU CHÍ CSS ĐÃ ÁP DỤNG:
- Có Skip to Main Content link và id main-content trên cả 3 trang.
- nav dùng inline-block, width 80%.
- nav img có width 10%.
- .grid có hai cột 40%, justify-content, align-items và row-gap.
- .grid img có width 100%.
- .flex có display:flex, flex-wrap và justify-content.
- Quy tắc li cũ được comment trong common.css.
- CSS liên kết trong cả ba trang HTML.

GHI CHÚ:
Sách được lưu trong localStorage của trình duyệt hiện tại. Biểu mẫu liên hệ chỉ minh họa giao diện, chưa gửi email/máy chủ.
Khi nộp GitHub Pages, tải toàn bộ nội dung thư mục lên repository.
