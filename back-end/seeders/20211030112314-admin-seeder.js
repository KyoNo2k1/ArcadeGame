'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('admins', [
      {
        Email:"tuankietnk2001@gmail.com",
        // admin01
        Password: "$2a$10$RMdCi6u/kBoz1YoYuT3JXeL.5VkrH.syMRud8xLW1FmrVmKUgkmFm", 
        Full_name: "Nguyễn Đặng Tuấn Kiệt",
        Gender: 1,
        DayOfBirth: "2001-04-09",
        Avatar: null
      },
      {
        Email:"oppahd96@gmail.com",
        // admin02
        Password: "$2a$10$n4JbLZpeR9ZHdwX6XZMItus5eOpT9wVkgr1z9cbtFMUJyC/XqVGMm",
        Full_name: "Hồ Minh Hiếu",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      },
      {
        Email:"bduyphuong12@gmail.com",
        // admin03
        Password: "$2a$10$Bx6yP.jeub3UXIIrzVOyvOThD2NDc13ktleqWFjrx6NIOkypU8i5m",
        Full_name: "Bùi Duy Phương",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      },
      {
        Email:"nghia567123@gmail.com",
        // admin04
        Password: "$2a$10$wCsZpR/3GjYoYtc4PdIOhO/Caumg/OnCagjmiWjtRJOIFrcAqsLVG",
        Full_name: "Lê Trung Nghĩa",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      },
      {
        Email:"19521953@gm.uit.edu.vn",
        // admin04
        Password: "$2a$10$4cfN/tekJXvAsmzK1U1ncOA0IUTXRq1rl85mhpc2OG5ZIhELqYijW",
        Full_name: "Mã Hải Nhật",
        Gender: 1,
        DayOfBirth: null,
        Avatar: null
      }
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('admins', {}, null)
  }
};
