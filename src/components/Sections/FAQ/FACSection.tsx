import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/root/ui/accordion";

const FAQData = [
  {
    id: 2,
    question: "How do I place an order?",
    answer:
      "To place an order, simply browse through our products, add your desired items to the cart, and proceed to checkout. You'll need to provide your shipping information and select a payment method to complete your purchase.",
  },
  {
    id: 3,
    question: "What payment methods do you accept?",
    answer:
      "We accept various payment methods including credit/debit cards and PayPal. For certain regions, we also offer cash on delivery (COD) options.",
  },
  {
    id: 4,
    question: "How long does shipping take?",
    answer:
      "Shipping times vary depending on your location and the shipping method selected. Typically, standard shipping takes 5-7 business days, while express shipping options can deliver within 2-3 business days.",
  },
  {
    id: 5,
    question: "Can I track my order?",
    answer:
      "Yes, once your order is shipped, you will receive a tracking number via email. You can use this number to track your order's progress through our website or the carrier's website.",
  },
  {
    id: 6,
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy on most items. If you're not satisfied with your purchase, you can return it for a full refund or exchange. Please ensure the items are in their original condition and packaging.",
  },
  {
    id: 7,
    question: "How do I return an item?",
    answer:
      "To return an item, please contact our customer service team with your order number and the reason for return. They will provide you with a return authorization and instructions on how to send the item back.",
  },
  {
    id: 8,
    question: "Do you offer warranties on your products?",
    answer:
      "Yes, many of our products come with manufacturer warranties. The warranty details can be found on the product page or in the documentation included with your purchase.",
  },
  {
    id: 9,
    question: "Can I change or cancel my order after it has been placed?",
    answer:
      "If you need to change or cancel your order, please contact our customer service team as soon as possible. If the order has not yet been processed or shipped, we will do our best to accommodate your request.",
  },
  {
    id: 10,
    question: "How can I contact customer support?",
    answer:
      "You can contact our customer support team via email at support@campersshop.com or by calling our toll-free number 1-800-123-4567. Our team is available Monday to Friday from 9 AM to 6 PM (EST) to assist you with any inquiries.",
  },
];

const FAQSection = () => {
  return (
    <section className="my-20 lg:my-28 px-3 lg:px-0">
      <div className="mx-auto text-center max-w-3xl mb-8 space-y-2">
        <p
          data-aos="fade-up"
          className="text-orange-500 font-semibold text-sm md:text-lg"
        >
          FAQ
        </p>
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-4xl text-gray-800 font-bold text-center font-young-serif"
        >
          Frequently Asked Questions.
        </h2>
        <p data-aos="fade-up" className="text-gray-600">
          Got questions? Find answers to common inquiries about our products,
          shipping, returns, and more. If you can't find what you're looking
          for, contact our support team.
        </p>
      </div>
      <div>
        <Accordion type="single" collapsible className="w-full">
          {FAQData.map((item) => (
            <AccordionItem
              data-aos="fade-up"
              value={`item-${item.id}`}
              key={item.id}
            >
              <AccordionTrigger className="text-xl text-gray-800">
                {item.question}
              </AccordionTrigger>
              <AccordionContent>{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
