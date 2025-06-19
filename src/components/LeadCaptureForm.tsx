import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';
import { Loader2, Shield } from 'lucide-react';
import { 
  sanitizeInput, 
  validateEmail, 
  validateAustralianPhone, 
  getSecureErrorMessage,
  formRateLimiter 
} from '@/utils/security';

interface LeadCaptureFormProps {
  onSuccess?: () => void;
}

export const LeadCaptureForm = ({ onSuccess }: LeadCaptureFormProps) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    businessName: '',
    email: '',
    phone: '+61 '
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    // Sanitize and format phone input
    const sanitized = sanitizeInput(value);
    const cleaned = sanitized.replace(/[^\d+]/g, '');
    
    if (!cleaned.startsWith('+61')) {
      return '+61 ';
    }
    
    const numbers = cleaned.slice(3);
    if (numbers.length <= 3) {
      return `+61 ${numbers}`;
    } else if (numbers.length <= 6) {
      return `+61 ${numbers.slice(0, 3)} ${numbers.slice(3)}`;
    } else {
      return `+61 ${numbers.slice(0, 3)} ${numbers.slice(3, 6)} ${numbers.slice(6, 9)}`;
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhoneNumber(e.target.value);
    setFormData(prev => ({ ...prev, phone: formatted }));
    
    // Clear phone validation error when user types
    if (validationErrors.phone) {
      setValidationErrors(prev => ({ ...prev, phone: '' }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({ ...prev, [name]: sanitizedValue }));
    
    // Clear validation error when user types
    if (validationErrors[name]) {
      setValidationErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    // Validate required fields
    if (!formData.firstName.trim()) {
      errors.firstName = 'First name is required';
    } else if (formData.firstName.length > 50) {
      errors.firstName = 'First name must be less than 50 characters';
    }

    if (!formData.lastName.trim()) {
      errors.lastName = 'Last name is required';
    } else if (formData.lastName.length > 50) {
      errors.lastName = 'Last name must be less than 50 characters';
    }

    if (!formData.businessName.trim()) {
      errors.businessName = 'Business name is required';
    } else if (formData.businessName.length > 100) {
      errors.businessName = 'Business name must be less than 100 characters';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim() || formData.phone === '+61 ') {
      errors.phone = 'Phone number is required';
    } else if (!validateAustralianPhone(formData.phone)) {
      errors.phone = 'Please enter a valid Australian phone number';
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Rate limiting check
    const userIdentifier = formData.email || 'anonymous';
    if (!formRateLimiter.canSubmit(userIdentifier)) {
      toast({
        title: "Too Many Attempts",
        description: "Please wait a moment before submitting again.",
        variant: "destructive",
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please correct the errors and try again.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Double-sanitize data before sending
      const sanitizedData = {
        firstName: sanitizeInput(formData.firstName),
        lastName: sanitizeInput(formData.lastName),
        businessName: sanitizeInput(formData.businessName),
        email: sanitizeInput(formData.email),
        phone: sanitizeInput(formData.phone)
      };

      // EmailJS configuration - Replace with your actual credentials
      await emailjs.send(
        'service_sintra', // Replace with your EmailJS service ID
        'template_lead', // Replace with your EmailJS template ID
        {
          to_email: 'nicostuart.perth@gmail.com',
          from_name: `${sanitizedData.firstName} ${sanitizedData.lastName}`,
          business_name: sanitizedData.businessName,
          email: sanitizedData.email,
          phone: sanitizedData.phone,
          message: `New lead from Sintra Business website:
          
Name: ${sanitizedData.firstName} ${sanitizedData.lastName}
Business: ${sanitizedData.businessName}
Email: ${sanitizedData.email}
Phone: ${sanitizedData.phone}
          
Submitted on: ${new Date().toLocaleString()}`,
          timestamp: new Date().toISOString()
        },
        'your_public_key' // Replace with your EmailJS public key
      );

      // Save to localStorage with timestamp for data retention policy
      const leads = JSON.parse(localStorage.getItem('sintra_leads') || '[]');
      leads.push({ 
        ...sanitizedData, 
        timestamp: new Date().toISOString(),
        id: crypto.randomUUID() // Add unique ID for potential cleanup
      });
      
      // Keep only last 100 leads to manage storage
      if (leads.length > 100) {
        leads.splice(0, leads.length - 100);
      }
      
      localStorage.setItem('sintra_leads', JSON.stringify(leads));

      toast({
        title: "Success!",
        description: "Thank you for your interest! We'll be in touch soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        businessName: '',
        email: '',
        phone: '+61 '
      });
      setValidationErrors({});

      onSuccess?.();
    } catch (error) {
      const secureMessage = getSecureErrorMessage(error);
      toast({
        title: "Error",
        description: secureMessage,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
            First Name *
          </Label>
          <Input
            id="firstName"
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleInputChange}
            className={`mt-1 ${validationErrors.firstName ? 'border-red-500' : ''}`}
            placeholder="John"
            maxLength={50}
          />
          {validationErrors.firstName && (
            <p className="text-red-500 text-xs mt-1">{validationErrors.firstName}</p>
          )}
        </div>
        <div>
          <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
            Last Name *
          </Label>
          <Input
            id="lastName"
            name="lastName"
            type="text"
            required
            value={formData.lastName}
            onChange={handleInputChange}
            className={`mt-1 ${validationErrors.lastName ? 'border-red-500' : ''}`}
            placeholder="Smith"
            maxLength={50}
          />
          {validationErrors.lastName && (
            <p className="text-red-500 text-xs mt-1">{validationErrors.lastName}</p>
          )}
        </div>
      </div>

      <div>
        <Label htmlFor="businessName" className="text-sm font-medium text-gray-700">
          Business Name *
        </Label>
        <Input
          id="businessName"
          name="businessName"
          type="text"
          required
          value={formData.businessName}
          onChange={handleInputChange}
          className={`mt-1 ${validationErrors.businessName ? 'border-red-500' : ''}`}
          placeholder="Your Business Pty Ltd"
          maxLength={100}
        />
        {validationErrors.businessName && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.businessName}</p>
        )}
      </div>

      <div>
        <Label htmlFor="email" className="text-sm font-medium text-gray-700">
          Email Address *
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleInputChange}
          className={`mt-1 ${validationErrors.email ? 'border-red-500' : ''}`}
          placeholder="john@business.com.au"
          maxLength={254}
        />
        {validationErrors.email && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.email}</p>
        )}
      </div>

      <div>
        <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
          Phone Number *
        </Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          required
          value={formData.phone}
          onChange={handlePhoneChange}
          className={`mt-1 ${validationErrors.phone ? 'border-red-500' : ''}`}
          placeholder="+61 XXX XXX XXX"
          maxLength={15}
        />
        {validationErrors.phone && (
          <p className="text-red-500 text-xs mt-1">{validationErrors.phone}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Shield className="mr-2 h-4 w-4" />
            Get Started with AI Solutions
          </>
        )}
      </Button>

      <div className="mt-4 text-center space-y-2">
        <p className="text-xs text-gray-500">
          By submitting this form, you agree to receive communications from Sintra Business. 
          You can unsubscribe at any time.
        </p>
        <p className="text-xs text-gray-400">
          <Shield className="inline h-3 w-3 mr-1" />
          Your data is protected with enterprise-grade security measures.
        </p>
      </div>
    </form>
  );
};
