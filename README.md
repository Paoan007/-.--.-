# Alumni Party 2026

โปรเจกต์ตัวอย่าง React + Vite สำหรับระบบงานเลี้ยงรุ่น 2026 (ฝั่ง User) ใช้ Mock Data และ localStorage เพื่อทดลองหน้าตาและ flow เบื้องต้น

## เริ่มต้นใช้งาน

ต้องติดตั้ง Node.js รุ่นที่รองรับ Vite ก่อน จากนั้นเปิด Terminal ที่โฟลเดอร์นี้แล้วรัน:

```bash
npm install
npm run dev
```

เปิด URL ที่ Terminal แสดง (โดยทั่วไปคือ http://localhost:5173)

## เทคโนโลยี

- React + Vite
- Tailwind CSS v4
- React Router
- Mock Data
- ไม่มี Lucide React หรือ icon library อื่น

## TailGrids

ติดตั้ง/ตั้งค่า TailGrids CLI เพิ่มเติมด้วย:

```bash
npx @tailgrids/cli@latest init
npx @tailgrids/cli@latest add button card input badge
```

ตรวจสอบไฟล์ CSS และตำแหน่ง Components ที่ CLI สร้าง แล้วทำตามคำแนะนำที่ CLI แสดงก่อน import มาใช้ เพราะ path อาจต่างกันตามเวอร์ชัน/การตั้งค่า

หน้าในโปรเจกต์นี้ใช้ Tailwind CSS เป็นหลัก เพื่อให้สามารถรันได้ทันทีโดยไม่ขึ้นกับ path ของ TailGrids components

## Routes

- `/` หน้าแรก
- `/login` เข้าสู่ระบบ (จำลอง)
- `/register` สมัครสมาชิก (จำลอง)
- `/user` Dashboard
- `/user/profile` ข้อมูลส่วนตัว
- `/user/buy-tickets` ซื้อบัตร
- `/user/buy-shirts` ซื้อเสื้อ
- `/user/cart` ตะกร้าสินค้า
- `/user/orders` คำสั่งซื้อ
- `/user/tickets` บัตรของฉัน
- `/user/qr-ticket` QR Ticket (ภาพจำลอง)
- `/user/wallet` Wallet
- `/user/token-history` ประวัติ Token
- `/user/shirts` เสื้อของฉัน

## หมายเหตุ

ระบบนี้เป็น Frontend demo เท่านั้น ไม่ใช่ระบบสมาชิก/ชำระเงินจริง การเข้าสู่ระบบไม่ได้ตรวจสอบบัญชี และ QR ไม่สามารถใช้เข้างานจริงได้
