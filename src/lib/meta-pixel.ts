/**
 * Meta Pixel Helper Module
 * Provides type-safe functions for Meta Pixel tracking
 */

// Extend Window interface for fbq
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    fbq: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _fbq: any;
  }
}

// Generate a UUID for event deduplication
export function generateEventId(): string {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c) => {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

// Check if fbq is available
function isFbqAvailable(): boolean {
  return typeof window !== "undefined" && typeof window.fbq === "function";
}

/**
 * Initialize the Meta Pixel
 * Called automatically by the MetaPixel component
 */
export function initPixel(pixelId: string): void {
  if (typeof window === "undefined") return;
  if (!pixelId) {
    console.warn("[Meta Pixel] No Pixel ID provided");
    return;
  }

  window.fbq("init", pixelId);
}

/**
 * Track a PageView event
 * Should be called on initial load and route changes
 */
export function trackPageView(): void {
  if (!isFbqAvailable()) {
    console.warn("[Meta Pixel] fbq not available for PageView");
    return;
  }
  window.fbq("track", "PageView");
}

/**
 * Track a Lead event
 * Use for form submissions, sign-ups, etc.
 */
export function trackLead(params?: { content_name?: string }): void {
  if (!isFbqAvailable()) {
    console.warn("[Meta Pixel] fbq not available for Lead");
    return;
  }
  const eventId = generateEventId();
  window.fbq("track", "Lead", {
    ...params,
    eventID: eventId,
  });
}

/**
 * Track a Purchase event
 * Use on thank you / order confirmation page
 */
export function trackPurchase(params?: {
  value?: number;
  currency?: string;
  content_name?: string;
  content_ids?: string[];
}): void {
  if (!isFbqAvailable()) {
    console.warn("[Meta Pixel] fbq not available for Purchase");
    return;
  }
  const eventId = generateEventId();
  window.fbq("track", "Purchase", {
    value: params?.value ?? 0,
    currency: params?.currency ?? "EUR",
    content_name: params?.content_name,
    content_ids: params?.content_ids,
    eventID: eventId,
  });
}

/**
 * Track InitiateCheckout event
 * Use when user starts checkout process
 */
export function trackInitiateCheckout(params?: {
  value?: number;
  currency?: string;
  content_name?: string;
}): void {
  if (!isFbqAvailable()) {
    console.warn("[Meta Pixel] fbq not available for InitiateCheckout");
    return;
  }
  const eventId = generateEventId();
  window.fbq("track", "InitiateCheckout", {
    ...params,
    eventID: eventId,
  });
}

/**
 * Track a custom event
 */
export function trackCustomEvent(
  eventName: string,
  params?: Record<string, unknown>
): void {
  if (!isFbqAvailable()) {
    console.warn(`[Meta Pixel] fbq not available for ${eventName}`);
    return;
  }
  const eventId = generateEventId();
  window.fbq("trackCustom", eventName, {
    ...params,
    eventID: eventId,
  });
}
