export const users = [
  {
    id: 1,
    name: 'ภาคิน งามเดชากิจ',
    email: 'user@demo.com',
    studentId: '1234',
    department: 'Computer Science',
    phone: '080-000-0000',
    address: 'กรุงเทพมหานคร',
    role: 'user',
  },
  {
    id: 2,
    name: 'ควบคุม รุ่นใหญ่',
    email: 'superadmin@demo.com',
    studentId: '1234',
    phone: '080-080-0880',
    address: 'กรุงเทพมหานคร',
    role: 'superadmin',
  },
  {
    id: 3,
    name: 'โทเคน หน้างาน',
    email: 'tokenadmin@demo.com',
    studentId: '1234',
    phone: '080-000-8008',
    address: 'กรุงเทพมหานคร',
    role: 'eventadmin',
  },
  {
    id: 4,
    name: 'ร้านค้า ในงาน',
    email: 'storeadmin@demo.com',
    studentId: '1234',
    phone: '080-080-0880',
    address: 'กรุงเทพมหานคร',
    role: 'storeadmin',
  },
]

// หน้าอื่น ๆ ที่ import { mockUser } อยู่ยังใช้ได้เหมือนเดิม (ใช้ผู้ใช้คนแรก)
export const mockUser = users[0]