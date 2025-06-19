
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Loader2 } from 'lucide-react';

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
  const { toast } = useToast();

  const formatPhoneNumber = (value: string) => {
    // Remove all non-digits except the + at the start
    const cleaned = value.replace(/[^\d+]/g, '');
    
    // Ensure it starts with +61
    if (!cleaned.startsWith('+61')) {
      return '+61 ';
    }
    
    // Format as +61 XXX XXX XXX
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
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Save to localStorage for persistence
      const leads = JSON.parse(localStorage.getItem('sintra_leads') || '[]');
      const newLead = { 
        ...formData, 
        timestamp: new Date().toISOString(),
        id: Date.now() // Simple ID for tracking
      };
      leads.push(newLead);
      localStorage.setItem('sintra_leads', JSON.stringify(leads));

      console.log('Lead captured:', newLead);

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

      onSuccess?.();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Error",
        description: "Something went wrong. Please try again or contact us directly.",
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
            className="mt-1"
            placeholder="John"
          />
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
            className="mt-1"
            placeholder="Smith"
          />
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
          className="mt-1"
          placeholder="Your Business Pty Ltd"
        />
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
          className="mt-1"
          placeholder="john@business.com.au"
        />
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
          className="mt-1"
          placeholder="+61 XXX XXX XXX"
        />
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
          'Get Started with AI Solutions'
        )}
      </Button>
    </form>
  );
};
