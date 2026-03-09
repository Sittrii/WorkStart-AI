import streamlit as st
import google.generativeai as genai

# Konfigurasi halaman agar ramah HP
st.set_page_config(page_title="Asisten Tugas Kokurikuler", layout="centered")

st.title("🤖 AI Pembantu Tugas")
st.subheader("Tugas Kokurikuler")

# Sidebar untuk pengaturan
with st.sidebar:
    st.title("Pengaturan")
    api_key = st.text_input("Masukkan Gemini API Key:", type="password")
    st.info("Dapatkan API Key di https://aistudio.google.com/app/apikey")

# Inisialisasi chat history
if "messages" not in st.session_state:
    st.session_state.messages = []

# Menampilkan chat lama
for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

# Input Chat
if prompt := st.chat_input("Apa yang bisa saya bantu untuk tugasmu?"):
    
    if not api_key:
        st.error("Isi API Key dulu di menu samping ya!")
    else:
        # Menampilkan pesan user
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)

        try:
            # Konfigurasi Gemini
            genai.configure(api_key=api_key)

            # Model AI
            model = genai.GenerativeModel("gemini-1.5-flash")

            # Generate jawaban
            response = model.generate_content(prompt)

            with st.chat_message("assistant"):
                st.markdown(response.text)

            # Simpan ke chat history
            st.session_state.messages.append({
                "role": "assistant",
                "content": response.text
            })

        except Exception as e:
            st.error(f"Ada error nih: {e}")
