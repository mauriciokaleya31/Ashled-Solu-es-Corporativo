import { useEffect, useState } from 'react';

/**
 * Security Hook to disable right-click context menu, developer inspect shortcuts,
 * image dragging, and source viewing shortcuts to protect corporate assets.
 */
export function useSecurityProtection() {
  const [securityToast, setSecurityToast] = useState<{
    show: boolean;
    message: string;
  }>({
    show: false,
    message: '',
  });

  const triggerAlert = (message: string) => {
    setSecurityToast({ show: true, message });
    window.clearTimeout((window as unknown as { _secTimeout?: number })._secTimeout);
    (window as unknown as { _secTimeout?: number })._secTimeout = window.setTimeout(() => {
      setSecurityToast({ show: false, message: '' });
    }, 2400);
  };

  useEffect(() => {
    // 1. Disable Right Click Context Menu
    const handleContextMenu = (e: MouseEvent) => {
      // Allow right-click ONLY inside input/textarea fields if the user needs to paste/copy text
      const target = e.target as HTMLElement;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }

      e.preventDefault();
      triggerAlert('Conteúdo Protegido • Ashled Soluções');
      return false;
    };

    // 2. Disable Key Combinations for DevTools, View Source, and Save
    const handleKeyDown = (e: KeyboardEvent) => {
      const isCtrlOrCmd = e.ctrlKey || e.metaKey;
      const key = e.key.toLowerCase();
      const code = e.keyCode || e.which;

      // F12 (DevTools)
      if (e.key === 'F12' || code === 123) {
        e.preventDefault();
        e.stopPropagation();
        triggerAlert('Acesso ao código fonte restrito');
        return false;
      }

      // Ctrl+Shift+I or Cmd+Option+I (Inspect)
      if (isCtrlOrCmd && e.shiftKey && (key === 'i' || key === 'I' || code === 73)) {
        e.preventDefault();
        e.stopPropagation();
        triggerAlert('Inspeção de elementos desativada');
        return false;
      }

      // Ctrl+Shift+J or Cmd+Option+J (Console)
      if (isCtrlOrCmd && e.shiftKey && (key === 'j' || key === 'J' || code === 74)) {
        e.preventDefault();
        e.stopPropagation();
        triggerAlert('Consola de desenvolvimento desativada');
        return false;
      }

      // Ctrl+Shift+C or Cmd+Option+C (Inspect Element cursor)
      if (isCtrlOrCmd && e.shiftKey && (key === 'c' || key === 'C' || code === 67)) {
        e.preventDefault();
        e.stopPropagation();
        triggerAlert('Inspeção de elementos desativada');
        return false;
      }

      // Ctrl+U or Cmd+Option+U (View Source)
      if (isCtrlOrCmd && (key === 'u' || key === 'U' || code === 85)) {
        e.preventDefault();
        e.stopPropagation();
        triggerAlert('Visualização de código fonte protegida');
        return false;
      }

      // Ctrl+S or Cmd+S (Save Page)
      if (isCtrlOrCmd && (key === 's' || key === 'S' || code === 83)) {
        e.preventDefault();
        e.stopPropagation();
        triggerAlert('Download de código fonte protegido');
        return false;
      }
    };

    // 3. Disable image dragging
    const handleDragStart = (e: DragEvent) => {
      const target = e.target as HTMLElement;
      if (target && target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener('contextmenu', handleContextMenu, { capture: true });
    document.addEventListener('keydown', handleKeyDown, { capture: true });
    document.addEventListener('dragstart', handleDragStart, { capture: true });

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu, { capture: true });
      document.removeEventListener('keydown', handleKeyDown, { capture: true });
      document.removeEventListener('dragstart', handleDragStart, { capture: true });
    };
  }, []);

  return { securityToast };
}
