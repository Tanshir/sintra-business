
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
    console.log('openModal called with trigger:', triggerType, 'hasShown:', hasShown);
    if (!hasShown) {
      setTrigger(triggerType);
      setIsModalOpen(true);
      setHasShown(true);
      // Store in localStorage to prevent showing again for this session
      localStorage.setItem('sintra_lead_modal_shown', 'true');
      console.log('Modal opened with trigger:', triggerType);
    } else {
      console.log('Modal already shown, not opening again');
    }
  }, [hasShown]);

  const closeModal = useCallback(() => {
    console.log('Modal closed');
    setIsModalOpen(false);
  }, []);

  useEffect(() => {
    console.log('useLeadCapture effect running');
    
    // Check if modal was already shown in this session
    const hasShownBefore = localStorage.getItem('sintra_lead_modal_shown');
    if (hasShownBefore) {
      console.log('Modal was already shown before, setting hasShown to true');
      setHasShown(true);
      return;
    }

    let timeoutId: NodeJS.Timeout;
    let hasTriggeredScroll = false;
    let hasTriggeredExit = false;

    // Time-based trigger
    timeoutId = setTimeout(() => {
      console.log('Time trigger activated after', timeDelay, 'ms');
      openModal('time');
    }, timeDelay);

    // Scroll-based trigger
    const handleScroll = () => {
      if (hasTriggeredScroll) return;
      
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      console.log('Scroll event:', {
        scrollTop,
        docHeight,
        scrollPercent,
        targetPercentage: scrollPercentage
      });

      if (scrollPercent >= scrollPercentage) {
        console.log('Scroll trigger activated at', scrollPercent, '%');
        hasTriggeredScroll = true;
        openModal('scroll');
        window.removeEventListener('scroll', handleScroll);
      }
    };

    // Exit intent trigger - improved detection
    const handleMouseLeave = (e: MouseEvent) => {
      if (hasTriggeredExit) return;
      
      // Check if mouse is leaving from the top of the page
      if (e.clientY <= 0 && e.relatedTarget === null) {
        console.log('Exit intent trigger activated');
        hasTriggeredExit = true;
        openModal('exit');
        document.removeEventListener('mouseleave', handleMouseLeave);
      }
    };

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    if (exitIntent) {
      document.addEventListener('mouseleave', handleMouseLeave);
    }

    console.log('Event listeners added:', {
      timeDelay,
      scrollPercentage,
      exitIntent
    });

    return () => {
      console.log('Cleaning up event listeners');
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
