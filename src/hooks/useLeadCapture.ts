
import { useState, useEffect, useCallback } from 'react';

interface UseLeadCaptureProps {
  timeDelay?: number; // milliseconds
  scrollPercentage?: number; // percentage of page scrolled
  exitIntent?: boolean;
}

export const useLeadCapture = ({
  timeDelay = 30000, // 30 seconds
  scrollPercentage = 70, // 70% of page
  exitIntent = true
}: UseLeadCaptureProps = {}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [trigger, setTrigger] = useState<'time' | 'scroll' | 'exit' | 'button'>('button');
  const [hasShown, setHasShown] = useState(false);

  const openModal = useCallback((triggerType: 'time' | 'scroll' | 'exit' | 'button' = 'button') => {
    console.log('Lead capture modal trigger:', triggerType, 'hasShown:', hasShown);
    if (!hasShown) {
      setTrigger(triggerType);
      setIsModalOpen(true);
      setHasShown(true);
      localStorage.setItem('sintra_lead_modal_shown', 'true');
      console.log('Modal opened with trigger:', triggerType);
    }
  }, [hasShown]);

  const closeModal = useCallback(() => {
    console.log('Closing modal');
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    // Check if modal was already shown in this session
    const hasShownBefore = localStorage.getItem('sintra_lead_modal_shown');
    if (hasShownBefore) {
      setHasShown(true);
      console.log('Modal already shown in this session');
      return;
    }

    console.log('Setting up lead capture triggers:', { timeDelay, scrollPercentage, exitIntent });

    // Time-based trigger
    const timeoutId = setTimeout(() => {
      console.log('Time trigger activated');
      openModal('time');
    }, timeDelay);

    // Scroll-based trigger
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;

      if (scrollPercent >= scrollPercentage) {
        console.log('Scroll trigger activated at', scrollPercent, '%');
        openModal('scroll');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Exit intent trigger
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        console.log('Exit intent trigger activated');
        openModal('exit');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    if (exitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [timeDelay, scrollPercentage, exitIntent, openModal]);

  return {
    isModalOpen,
    trigger,
    openModal,
    closeModal,
    hasShown
  };
};
