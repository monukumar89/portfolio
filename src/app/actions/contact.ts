"use server";

export async function submitContactForm(formData: FormData) {
  const accessKey = "YOUR_WEB3FORMS_ACCESS_KEY_HERE"; // User needs to replace this
  
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return { success: false, message: "All fields are required." };
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        name,
        email,
        message,
        from_name: "Portfolio Contact Form",
        subject: `New Message from ${name}`,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return { success: true, message: "Thank you! Your message has been sent successfully." };
    } else {
      return { success: false, message: result.message || "Something went wrong. Please try again later." };
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return { success: false, message: "Failed to send message. Please check your connection." };
  }
}
