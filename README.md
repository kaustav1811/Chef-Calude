# 🍳 Chef Claude – AI Recipe Generator  

Chef Claude is an AI-powered web application that helps you cook with the ingredients you already have. Simply enter the ingredients one by one, and Chef Claude will generate a **creative dish name**, along with a **step-by-step recipe including proper measurements**.  

---

## 🚀 Features  

- ✅ Add ingredients interactively.  
- ✅ Generate recipes using **Mistral Mixtral-8x7B-Instruct** via Hugging Face API or Claude API.  
- ✅ AI gives you:
  - A **dish name** 🍲  
  - A **list of ingredients with measurements** 🥄  
  - A **step-by-step guide** 👨‍🍳  
- ✅ Clean React frontend with forms, event listeners, and states.  
- ✅ Beginner-friendly project to learn **React, APIs, and AI integration**.  

---

## 🛠️ Tech Stack  

- **Frontend:** React.js  
- **Backend/API:** Hugging Face Inference API / Claude API  
- **Model Used:** `mistralai/Mixtral-8x7B-Instruct-v0.1`  
- **Styling:** CSS  
- **Other Concepts Learned:**
  - State & Props in React  
  - Event Listeners for interactivity  
  - Controlled inputs & form handling  
  - Using `useState` for dynamic UI updates  

---

## API 
VITE_HF_ACCESS_TOKEN = your-api-here

📖 How It Works
1. User enters ingredients one by one.
2. Ingredients are stored in React state.
3. When done, the app builds a prompt with all ingredients.
4. Prompt is sent to Hugging Face API (Mixtral-8x7B-Instruct) or Claude API.
5. AI responds with:
6. Dish name
7. Full recipe (ingredients + measurements)
8. Step-by-step instructions
9. Recipe is displayed beautifully on the UI.

Screenshots and video preview have been added to preview folder 

## 📚 Learnings from the Project
- Difference between **state** and **props** in React  
- Using **useState** hook for re-rendering and dynamic updates  
- Controlled inputs and form handling in React  
- How event listeners make static sites dynamic  
- Form data handling (**checkboxes, radio buttons, formData.getAll**)  
- API integration with **Hugging Face** and **Claude**  
- Handling previous state using callback in **setState**  

---

## 🔮 Future Improvements
- ➕ Allow users to **delete ingredients** from the list  
- ➕ Add **dietary preferences** (vegan, keto, gluten-free)  
- ➕ **Save & share** favorite recipes  
- ➕ Add **voice input** for ingredients  
