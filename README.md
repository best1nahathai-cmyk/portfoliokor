# PORTFOLIOKOR

Marketing & Design Portfolio — Nahathai K.
Live site: https://best1nahathai-cmyk.github.io/portfoliokor/

---

## ไฟล์ในโปรเจกต์

| ไฟล์ / โฟลเดอร์ | คืออะไร |
|---|---|
| `index.html` | หน้าแรก (homepage) |
| `javin-jisoo.html` | Case study: Javin De Seoul × Jisoo |
| `mac-winter.html` | Case study: MAC Winter Collection |
| `bad-bitch-club.html` | Case study: Bad Bitch Club Perfume |
| `two-part-strategy.html` | Case study: Two Part Strategy |
| `porcelain-noir.html` | Case study: Porcelain Noir |
| `site.css` | CSS ทั้งหมดของเว็บ |
| `site.js` | JavaScript: นาฬิกา CDMX + scroll reveal |
| `photos/` | รูปภาพที่ใช้ใน case studies |
| `uploads/` | ไฟล์ประกอบอื่น ๆ |

---

## วิธีเปิดเว็บในเครื่อง

**วิธีที่ 1 — Live Server (แนะนำ)**
1. ติดตั้ง extension "Live Server" ใน VS Code
2. คลิกขวาที่ `index.html` → **Open with Live Server**
3. เปิดที่ `http://127.0.0.1:5500` และ auto-refresh ทุกครั้งที่บันทึกไฟล์

**วิธีที่ 2 — เปิดตรง**
```powershell
start index.html
```

---

## วิธีแก้ไขเว็บแล้ว push ขึ้น GitHub

### ครั้งแรก (ทำไปแล้ว — ไม่ต้องทำซ้ำ)
```powershell
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/best1nahathai-cmyk/portfoliokor.git
git branch -M main
git push -u origin main
```

### ครั้งต่อไป (ใช้ทุกครั้งที่แก้ไขเว็บ)
```powershell
git add .
git commit -m "อธิบายสิ่งที่แก้ไข"
git push
```

> รอประมาณ 1–2 นาทีแล้ว refresh ลิงค์ GitHub Pages

---

## สิ่งที่แก้ไขในเซสชันนี้

### 1. ใส่รูปภาพใน REF cards (`javin-jisoo.html`)
- REF 01 → `photos/kieu-trang-diem-jisoo-trong-eyes-closed.jpg`
- REF 02 → `photos/images.jpg`
- REF 03 → `photos/best-jisoo-earthquake-beauty-looks-vogue-singapore-02.jpg`
- รูปใช้ `object-fit: cover` ให้เต็มกรอบโดยไม่เสียสัดส่วน

### 2. แก้บัค sections หายบน GitHub Pages
- **สาเหตุ:** CSS ตั้ง `opacity: 0` ให้ทุก `[data-reveal]` section แต่ JavaScript ที่จะ reveal ถูก comment ออก
- **แก้:** uncomment scroll reveal ใน `site.js` ให้ทำงานปกติ

### 3. ติดตั้ง Git และ push ขึ้น GitHub
- ติดตั้ง Git ผ่าน winget
- Init repo, commit ทุกไฟล์, push ขึ้น `main`

---

## GitHub Pages

- **URL:** https://best1nahathai-cmyk.github.io/portfoliokor/
- **Repo:** https://github.com/best1nahathai-cmyk/portfoliokor
- Deploy อัตโนมัติทุกครั้งที่ push ขึ้น branch `main`
- ตั้งค่า Pages: Settings → Pages → Source: Deploy from branch `main` / `/ (root)`
