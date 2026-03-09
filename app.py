import streamlit as st
from google import genai

st.set_page_config(page_title="Asisten Tugas Kokurikuler", layout="centered")

st.title("🤖 AI Pembantu Tugas")
st.subheader("Tugas Kokurikuler")

with st.sidebar:
    st.title("Pengaturan")
    api_key = st.text_input("Masukkan Gemini API Key:", type="password")
    st.info("Dapatkan API Key di https://aistudio.google.com/app/apikey")

if "messages" not in st.session_state:
    st.session_state.messages = []

for message in st.session_state.messages:
    with st.chat_message(message["role"]):
        st.markdown(message["content"])

if prompt := st.chat_input("Apa yang bisa saya bantu untuk tugasmu?"):

    if not api_key:
        st.error("Isi API Key dulu di menu samping ya!")
    else:
        st.session_state.messages.append({"role": "user", "content": prompt})

        with st.chat_message("user"):
            st.markdown(prompt)

        try:
            client = genai.Client(api_key=api_key)

            response = client.models.generate_content(
                model="gemini-2.0-flash",
                contents=prompt
            )

            reply = response.text

            with st.chat_message("assistant"):
                st.markdown(reply)

            st.session_state.messages.append({
                "role": "assistant",
                "content": reply
            })

        except Exception as e:
            st.error(f"Ada error nih: {e}")
