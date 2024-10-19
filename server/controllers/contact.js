const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create a contact form submission
exports.createContactForm = async (req, res) => {
    console.log("contact.....client");

    console.log("request contact",req.body);
    
  try {
    const { name, email, message ,subject} = req.body;
    console.log("request contact data>>>>>>>>>>",name,email,message,subject);

    // Validate required fields
    if (!name || !email || !message || !subject) {
      return res.status(400).json({ message: 'All fields are required' });
    }
    const to="missnaziya24@gmail.com";
    await sendEmail(
        email, // Customer email
        to,
        ' Confirmation', // Email subject
        `Thank you for your order! Your order ID is ${corder.id}` // Email body
      )
    // Create new contact form entry using Prisma
    const newContactForm = await prisma.contact.create({
      data: {
        name,
        email,
        message,
        subject
      }
    });

    return res.status(201).json({
      message: 'Thankyou for contacting will get back to you shortly.',
      data: newContactForm
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error submitting the contact form',
      error: error.message
    });
  }
};

// Get all contact form submissions (Admin only)
exports.getAllContactForms = async (req, res) => {
  try {
    const contactForms = await prisma.contact.findMany();
    return res.status(200).json({
      message: 'All contact forms retrieved successfully',
      data: contactForms
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching contact forms',
      error: error.message
    });
  }
};

// Get a specific contact form by ID (Admin only)
exports.getContactForm = async (req, res) => {
  try {
    const contactFormId = parseInt(req.params.id);
    const contactForm = await prisma.contactForm.findUnique({
      where: {
        id: contactFormId
      }
    });

    if (!contactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }

    return res.status(200).json({
      message: 'Contact form retrieved successfully',
      data: contactForm
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error fetching contact form',
      error: error.message
    });
  }
};

// Delete a specific contact form by ID (Admin only)
exports.deleteContactForm = async (req, res) => {
  try {
    const contactFormId = parseInt(req.params.id);
    const contactForm = await prisma.contactForm.findUnique({
      where: {
        id: contactFormId
      }
    });

    if (!contactForm) {
      return res.status(404).json({ message: 'Contact form not found' });
    }

    await prisma.contactForm.delete({
      where: {
        id: contactFormId
      }
    });

    return res.status(200).json({
      message: 'Contact form deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error deleting contact form',
      error: error.message
    });
  }
};
