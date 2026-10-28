from PIL import Image, ImageDraw, ImageFont
W, H = 1200, 630
PAPER = (255, 255, 255); INK = (27, 20, 100); GREEN = (57, 181, 74); MUTED = (95, 94, 125); LINE = (228, 228, 240)
img = Image.new('RGB', (W, H), PAPER)
d = ImageDraw.Draw(img)
F = 'static/fonts/'
f_head = ImageFont.truetype(F+'heebo-v21-latin-900.ttf', 53)
f_sub  = ImageFont.truetype(F+'heebo-v21-latin-regular.ttf', 23)
f_tag  = ImageFont.truetype(F+'heebo-v21-latin-500.ttf', 18)
f_foot = ImageFont.truetype(F+'heebo-v21-latin-500.ttf', 17)

logo = Image.open('static/img/sp-logo-color.png').convert('RGBA')
lw = 290; lh = int(logo.height * lw / logo.width)
logo = logo.resize((lw, lh), Image.LANCZOS)
img.paste(logo, (64, 56), logo)

y = 176
d.text((64, y), "Open-source platform", font=f_head, fill=INK)
d.text((64, y+60), "for industrial data.", font=f_head, fill=GREEN)
sub = ["Connect machines, process live data,", "keep the history, build charts and", "dashboards. On your own servers."]
for i, line in enumerate(sub):
    d.text((64, 330 + i*32), line, font=f_sub, fill=MUTED)

x = 64; cy = 452
for p in ["OPC UA", "MQTT", "S7", "Modbus", "Kafka"]:
    tw = d.textlength(p, font=f_tag)
    d.rounded_rectangle((x, cy, x+tw+26, cy+36), radius=6, outline=LINE, width=2, fill=PAPER)
    d.text((x+13, cy+7), p, font=f_tag, fill=INK)
    x += tw + 38

d.line((64, 552, 560, 552), fill=LINE, width=2)
d.text((64, 566), "streampipes.apache.org  ·  An Apache Software Foundation project", font=f_foot, fill=MUTED)

# OPC UA node browser, cropped to the browse tree and node details, plain hairline frame
shot = Image.open('static/img/2026/connect-create-opcua-browser.png').convert('RGB')
crop = shot.crop((540, 96, 2250, 1568))
fw = 536; fh = int(crop.height * fw / crop.width)
crop = crop.resize((fw, fh), Image.LANCZOS)
fx, fy = 628, 84
mask = Image.new('L', crop.size, 0)
ImageDraw.Draw(mask).rounded_rectangle((0, 0, fw, fh), radius=10, fill=255)
img.paste(crop, (fx, fy), mask)
d.rounded_rectangle((fx, fy, fx+fw, fy+fh), radius=10, outline=LINE, width=2)
d.rectangle((0, 0, 10, H), fill=GREEN)
img.save('static/img/streampipes-social-card-2026.png', optimize=True)
print(img.size, fh)
