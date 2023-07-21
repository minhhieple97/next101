getStaticSiteGeneration

- REnder toàn bộ page ở server
- Browser chỉ việc gọi page về để dùng
- Chạy ở build time => Thích hợp những ứng dụng không thay đổi nhiều
- Dữ liệu gửi về client sẽ là page html được build sẵn và đoạn data được inject vào script \_\_NEXT_DATA để user vẫn có thể interactive với browser
  getServerSideProps
- Render toàn bộ page cũng ở server
- Chạy ở runtime
