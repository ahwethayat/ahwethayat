import sys
try:
    import fitz
except ImportError:
    import subprocess
    subprocess.check_call([sys.executable, "-m", "pip", "install", "pymupdf"])
    import fitz

doc = fitz.open("Menu Hayat.pdf")
menu_data = []

for page_num, page in enumerate(doc):
    text = page.get_text()
    # تنظيم النصوص المستخرجة لتناسب هيكلة بيانات الموقع (menu_data.js)
    menu_data.append({
        "page": page_num + 1,
        "content": text
    })
    print(f"--- Page {page_num + 1} ---")
    print(text)