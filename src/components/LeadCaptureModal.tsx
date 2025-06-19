
import React, { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { LeadCaptureForm } from './LeadCaptureForm';
import { X } from 'lucide-react';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  trigger?: 'time' | 'scroll' | 'exit' | 'button';
}

export const LeadCaptureModal = ({ isOpen, onClose, trigger = 'button' }: LeadCaptureModalProps) => {
  const handleSuccess = () => {
    onClose();
  };

  const getTriggerTitle = () => {
    switch (trigger) {
      case 'time':
        return "Still browsing? Let's talk!";
      case 'scroll':
        return "Interested in AI solutions?";
      case 'exit':
        return "Wait! Don't miss out!";
      default:
        return "Transform Your Business with AI";
    }
  };

  const getTriggerDescription = () => {
    switch (trigger) {
      case 'time':
        return "You've been exploring our AI solutions - let us show you how they can transform your business.";
      case 'scroll':
        return "You've seen what our AI can do. Ready to see how it can work for your business?";
      case 'exit':
        return "Before you go, let us show you how our AI solutions can revolutionize your business operations.";
      default:
        return "Join thousands of businesses already using AI to automate processes, increase efficiency, and boost profits.";
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-white">
        <DialogHeader className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img 
                src="/lovable-uploads/3d8ba123-789d-4596-93a2-d9ecb67e88a0.png" 
                alt="Sintra Business" 
                className="h-8 w-8 rounded-lg" 
              />
              <span className="font-bold text-lg text-gray-900">Sintra Business</span>
            </div>
          </div>
          
          <DialogTitle className="text-2xl font-bold text-gray-900 text-left">
            {getTriggerTitle()}
          </DialogTitle>
          
          <DialogDescription className="text-gray-600 text-left">
            {getTriggerDescription()}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-6">
          <LeadCaptureForm onSuccess={handleSuccess} />
        </div>

        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            By submitting this form, you agree to receive communications from Sintra Business. 
            You can unsubscribe at any time.
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};
