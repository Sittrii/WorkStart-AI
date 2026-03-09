import streamlit as st
import google.generativeai as genai

# Konfigurasi halaman agar ramah HP
st.set_page_config(page_title="Asisten Tugas Kokurikuler", layout="centered")

st.title("🤖 AI Pembantu Tugas")
st.subheader("Tugas Kokurikuler")

# Sidebar untuk pengaturan
with st.sidebar:
    st.title("Pengaturan")
    api_key = st.text_input("AIzaSyDam5mNxj8SfaLPgEHV38EmaNdNKhKo4Ig:", type="password")
    st.info("Dapatkan API Key di [Google AI Studio](https://aistudio.google.com/)")

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
        st.error("Waduh, isi API Key dulu ya di menu samping!")
    else:
        # Menampilkan pesan user
        st.session_state.messages.append({"role": "user", "content": prompt})
        with st.chat_message("user"):
            st.markdown(prompt)

        # Proses jawaban dari AI
        try:
            genai.configure(api_key=api_key)
            model = genai.GenerativeModel("gemini-1.5-pro-latest") # Versi cepat & gratis
            
            with st.chat_message("assistant"):
                response = model.generate_content(prompt)
                st.markdown(response.text)
                st.session_state.messages.append({"role": "assistant", "content": response.text})
        except Exception as e:
            st.error(f"Ada error nih: {e}")
