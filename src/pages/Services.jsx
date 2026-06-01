import React from "react";
import { Helmet } from "react-helmet-async";
import TopImage from "../components/TopImage";
import ServiceItem from "../components/ServiceItem";

function Services() {
  return (
    <main>
      <Helmet>
        <title>Our Products — Al Huriat Printing Press</title>
        <meta
          name="description"
          content="Business cards, brochures, packaging materials, envelopes, books, stickers, and custom business forms — printed in Lebanon with 60+ years of experience."
        />
      </Helmet>
      <TopImage
        image_url="/assets/printing.webp"
        catching_phrase="Choose. Customize. Order."
        guide="Our Products"
        sub_phrase="Craft your business identity in just three simple steps."
      />

      <section className="serviceGrid" aria-label="Our products">
        <ServiceItem
          image_url="/assets/business-card.jpeg"
          content="We will help you create your customized business cards from a wide selection of papers, designs and finishing"
          title="Business Cards"
        />
        <ServiceItem
          image_url="/assets/books.jpeg"
          content="With a big variety of sizes, designs, types, colors and forms, we
              will make sure your brochures and flyers are as lively as possible"
          title="Brochures/Flyers"
        />
        <ServiceItem
          image_url="/assets/packaging.jpeg"
          content="From boxes and paper bags to folders and covers, bedsets,
              Goldcoins wraps and others, we will make sure your packaging
              materials stand out"
          title="Packaging Materials"
        />
        <ServiceItem
          image_url="/assets/envelops.jpeg"
          content="Leave a professional mark with your printed envelopes in different
              sizes, shapes and colors"
          title="Envelops"
        />
        <ServiceItem
          image_url="/assets/brochures.jpeg"
          content="With our wide printing portfolio of booklets and books, our team
              will help you bring your books to life"
          title="Books/Booklets"
        />
        <ServiceItem
          image_url="/assets/stickers.jpeg"
          content="Our team will assist you in customizing your stickers and vinil
              printouts as needed with different sizes, shapes, colors and
              designs"
          title="Stickers/Vinil"
        />
        <ServiceItem
          image_url="/assets/forms.jpeg"
          content="Print your different business forms from invoice booklets, receipts and other business forms personalized with your logos, formats and numbering"
          title="Business Forms"
        />
      </section>
    </main>
  );
}

export default Services;
