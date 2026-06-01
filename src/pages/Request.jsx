import { React, useState } from "react";
import { Helmet } from "react-helmet-async";
import TopImage from "../components/TopImage";
import Questions from "../components/Questions";
import axios from "axios";

function Requests() {
  const urlText =
    "mailto:joerizk2@hotmail.com?subject=SendMail&body=Description i want a business card";
  const [product, setProduct] = useState("b_card");
  const handleProductChange = (event) => {
    event.persist();
    setProduct(() => event.target.value);
  };
  const products = {
    b_card: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        {
          question: "Double sided printing?",
          options: "",
          type: "checkbox",
        },
        { question: "With UV?", options: "", type: "checkbox" },
        {
          question: "With cellophane?",
          options: "",
          type: "checkbox",
        },
        {
          question: "Die cutting",
          options: "",
          type: "checkbox",
        },
        { question: "Additional information", options: "", type: "" },
      ],
      data: { colors: "", quantity: "" },
    },
    booklet: {
      questions: [
        {
          question: "Number of Colors for cover",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Number of Colors for inside",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },
        {
          question: "Number of pages",
          placeholder: "Number of pages",
          options: "",
          type: "number",
        },
        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        {
          question: "Double sided printing?",
          options: "",
          type: "checkbox",
        },
        { question: "With UV?", options: "", type: "checkbox" },
        {
          question: "With cellophane?",
          options: "",
          type: "checkbox",
        },
        { question: "Additional information", options: "", type: "" },
      ],
      data: { colors: "", quantity: "" },
    },
    book: {
      questions: [
        {
          question: "Number of Colors for cover",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Number of Colors for inside",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },

        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },
        {
          question: "Number of pages",
          placeholder: "Number of pages",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        {
          question: "Double sided printing?",
          options: "",
          type: "checkbox",
        },
        { question: "With UV?", options: "", type: "checkbox" },
        {
          question: "With cellophane?",
          options: "",
          type: "checkbox",
        },
        { question: "Additional information", options: "", type: "" },
      ],
      data: { colors: "", quantity: "" },
    },

    flyer: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        {
          question: "Double sided printing?",
          options: "",
          type: "checkbox",
        },
        { question: "With UV?", options: "", type: "checkbox" },
        {
          question: "With cellophane?",
          options: "",
          type: "checkbox",
        },
        { question: "Additional information", options: "", type: "" },
      ],
    },
    brochure: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },
        {
          question: "Number of pages",
          placeholder: "Number of pages",
          options: "",
          type: "number",
        },
        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        {
          question: "Double sided printing?",
          options: "",
          type: "checkbox",
        },
        { question: "With UV?", options: "", type: "checkbox" },
        {
          question: "With cellophane?",
          options: "",
          type: "checkbox",
        },
        { question: "Additional information", options: "", type: "" },
      ],
    },
    b_forms: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },

        {
          question: "With perforation?",
          options: "",
          type: "checkbox",
        },

        {
          question: "With numbering?",
          options: "",
          type: "checkbox",
        },

        {
          question: "Start numbering from",
          placeholder: "Start numbering from",
          options: "",
          type: "number",
        },
        { question: "Additional information", options: "", type: "" },
      ],
    },

    p_bags: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        { question: "Additional information", options: "", type: "" },
      ],
    },
    folders: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        {
          question: "Paper",
          placeholder: "Paper description",
          options: "",
          type: "text",
        },

        { question: "Additional information", options: "", type: "" },
      ],
    },
    envelops: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        { question: "Additional information", options: "", type: "" },
      ],
    },
    stickers: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Glossy?",
          options: "",
          type: "checkbox",
        },
        {
          question: "Matt?",
          options: "",
          type: "checkbox",
        },
        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        { question: "Additional information", options: "", type: "" },
      ],
    },
    vinil: {
      questions: [
        {
          question: "Number of Colors",
          placeholder: "Number of Colors",
          options: [
            { label: "1", value: 1 },
            { label: "2", value: 2 },
            { label: "3", value: 3 },
            { label: "4", value: 4 },
          ],
          type: "select",
        },
        {
          question: "Quantity",
          placeholder: "Quantity",
          options: "",
          type: "number",
        },

        {
          question: "Glossy?",
          options: "",
          type: "checkbox",
        },
        {
          question: "Matt?",
          options: "",
          type: "checkbox",
        },
        {
          question: "Size",
          placeholder: "Ex: '5.5x8.5cm'",
          options: "",
          type: "text",
        },
        { question: "Additional information", options: "", type: "" },
      ],
    },
    other: {
      questions: [
        {
          question: "Description",
          placeholder: "Enter Information",
          options: "",
          type: "",
        },
      ],
    },
  };
  const [formData, setFormData] = useState({
    "Number of Colors": 1,
    Product: "b_card",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = document.getElementById("requestPrint");
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const product = document.getElementById("product").value;

    if (!name || !email || !number || !product) {
      alert("Please fill out all required fields.");
      return; // Stop further execution
    } else {
      axios({
        method: "POST",
        url: "https://formbold.com/s/3Zglp",
        data: formData,
      })
        .then((r) => {
          alert("Thank you, your form was submitted.");
          setFormData(() => ({}));
          form.reset();
        })
        .catch((r) => {
          console.log("error", r);
          alert("An error occurred while submitting the form.");
        });
    }
  };
  return (
    <main>
      <Helmet>
        <title>Request a Quote — Al Huriat Printing Press</title>
        <meta
          name="description"
          content="Request a custom printing quote from Al Huriat. Tell us about your project — quantity, paper, colors, finishing — and we'll get back to you."
        />
      </Helmet>
      <TopImage
        image_url="/assets/printing.webp"
        catching_phrase="Ready to get your next project started?"
        guide="Requests"
        sub_phrase="From concept to finished product, your project is our priority."
      />
      <section className="formContainer" aria-labelledby="request-heading">
        <div className="formBox">
          <div className="formCard">
            <h1 id="request-heading">Requests</h1>
            <p style={{ marginBottom: 24 }}>
              Tell us about your project and we'll get back to you with a quote.
            </p>

            <form
              id="requestPrint"
              style={{ width: "100%", display: "flex", flexDirection: "column" }}
            >
              <div className="formWrapper">
                <div className="formSection">
                  <label className="required" htmlFor="name">Name</label>
                  <input
                    name="name"
                    placeholder="Name"
                    className="textField"
                    id="name"
                    required
                    type="text"
                    onChange={handleInputChange}
                  />

                  <label className="required" htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    placeholder="Email"
                    onChange={handleInputChange}
                    className="textField"
                  />
                </div>
                <div className="formSection">
                  <label className="required" htmlFor="number">Phone Number</label>
                  <input
                    type="tel"
                    name="Phone Number"
                    placeholder="Phone Number"
                    required
                    id="number"
                    onChange={handleInputChange}
                    className="textField"
                  />

                  <label className="required" htmlFor="product">Products</label>
                  <select
                    onChange={(event) => {
                      handleInputChange(event);
                      handleProductChange(event);
                    }}
                    name="Product"
                    id="product"
                    className="textField"
                    defaultValue="b_card"
                    required
                  >
                    <option value="b_card">Business Card</option>
                    <option value="brochure">Brochure</option>
                    <option value="flyer">Flyer</option>
                    <option value="p_bags">Paper Bags</option>
                    <option value="folders">Folders</option>
                    <option value="envelops">Envelops</option>
                    <option value="booklet">Booklet</option>
                    <option value="book">Book</option>
                    <option value="stickers">Stickers</option>
                    <option value="vinil">Vinil</option>
                    <option value="b_forms">Business Forms</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <h4 style={{ marginTop: 28, marginBottom: 16, width: "100%" }}>
                Fill in your details:
              </h4>
              <Questions
                product={products[product]}
                handleChange={handleInputChange}
              />
              <button
                className="submitButton"
                type="submit"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Requests;
