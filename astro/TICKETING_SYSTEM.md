# Ticketing System Documentation

This document describes the ticketing system implementation for the Normandie.ai event website.

## Overview

The ticketing system integrates with Hi.events API to provide ticket purchasing functionality. It features promo code validation, dynamic ticket display, and seamless checkout redirection.

## Architecture

### Components

#### 1. `TicketingHeader.astro`

Simple header component for the ticketing page.

**Props:**

- `logoUrl` (string): Path to the logo image (default: `/logo.png`)
- `logoAlt` (string): Alt text for the logo
- `backUrl` (string): URL for the back button (default: `/`)
- `backText` (string): Text for the back button (default: `Retour au site`)

#### 2. `TicketingForm.astro`

Main form component handling ticket selection and checkout.

**Features:**

- Promo code validation
- Dynamic ticket filtering based on promo code
- Ticket quantity counter (with min/max validation)
- HTML stripping from descriptions
- Order creation and checkout redirect

**Props:**

- `title` (string): Page title
- `products` (TicketProduct[]): Array of ticket products
- `maxTickets` (number): Maximum tickets per order (default: 4)
- `apiHost` (string): Hi.events API host URL
- `eventId` (string): Event ID

#### 3. `TicketingSidebar.astro`

Right-side panel displaying the popcorn background image.

**Props:**

- `imageUrl` (string): Path to background image (default: `/popcorn.png`)

### Page

#### `billetterie.astro`

Main ticketing page with 50/50 split layout.

**Layout:**

- Left column: Header + Form
- Right column: Sidebar image (hidden on mobile)

## Environment Variables

Required environment variables in `.env`:

```bash
# Hi.events API configuration
HIEVENTS_API_HOST=https://my-hi-events-instance.com
HIEVENTS_EVENT_ID=1
MAX_TICKETS=4
```

## API Integration

### Endpoints Used

1. **Fetch Event Data**

   ```
   GET {HIEVENTS_API_HOST}/api/public/events/{eventId}
   ```

   Retrieves event details and available tickets on page load.

2. **Validate Promo Code**

   ```
   GET {HIEVENTS_API_HOST}/api/public/events/{eventId}/promo-codes/{promoCode}
   ```

   Returns: `{ valid: boolean }`

3. **Fetch Event with Promo Code**

   ```
   GET {HIEVENTS_API_HOST}/api/public/events/{eventId}?promo_code={promoCode}
   ```

   Retrieves event data with promo code applied, potentially unlocking hidden tickets.

4. **Create Order**

   ```
   POST {HIEVENTS_API_HOST}/api/public/events/{eventId}/order
   ```

   **Request Body:**

   ```json
   {
     "promo_code": "string",
     "products": [
       {
         "product_id": 1,
         "quantities": [
           {
             "quantity": 1,
             "price_id": 1
           }
         ]
       }
     ]
   }
   ```

   **Response:**

   ```json
   {
     "data": {
       "short_id": "o_TBXR7stqB1qrh",
       "session_identifier": "sess_xyz123"
     }
   }
   ```

## User Flow

1. User lands on `/billetterie` page
2. Page fetches event data and displays "Ticket d'accès professionnel" by default
3. User can optionally enter a promo code:
   - Code is validated via API
   - If valid, page re-fetches event data with promo code
   - Additional tickets are displayed if `is_hidden !== true`
4. User selects ticket quantity (max 4 by default)
5. User clicks "Commander" button
6. Order is created via API
7. User is redirected to checkout page with `session_identifier` in URL query parameter:
   ```
   {HIEVENTS_API_HOST}/checkout/1/{short_id}/details?session_identifier={session_identifier}
   ```

## Filtering Logic

### Initial Load

Only displays tickets where:

```javascript
product.title === "Ticket d'accès professionnel";
```

### After Promo Code Applied

Displays tickets where:

```javascript
product.is_hidden !== true && product.title === "Ticket d'accès professionnel";
```

## Key Features

### HTML Description Stripping

Ticket descriptions from the API may contain HTML tags. Both server-side and client-side stripping is implemented:

**Server-side (Astro):**

```javascript
function stripHtml(html: string): string {
  return html.replace(/<[^>]*>/g, "");
}
```

**Client-side (JavaScript):**

```javascript
function stripHtmlClient(html) {
  const tmp = document.createElement("div");
  tmp.innerHTML = html;
  return tmp.textContent || tmp.innerText || "";
}
```

### Ticket Counter

- Increment/decrement buttons for each ticket type
- Buttons are disabled when limits are reached (0 min, MAX_TICKETS max)
- Total ticket count is calculated across all ticket types
- "Commander" button is disabled when total count is 0

### Session Management

The `session_identifier` is passed to the checkout page via URL query parameter rather than cookies for simplicity and cross-environment compatibility (works in both development and production).

## Styling

- Uses Tailwind CSS for styling
- Purple theme color: `#725CFA`
- Responsive layout with mobile-first approach
- 50/50 split on large screens, stacked on mobile

## Development

### Local Testing

When testing locally, the API host can be set to localhost:

```bash
HIEVENTS_API_HOST=https://localhost:8443
```

## Notes

- The ticketing page is a static page that fetches data client-side
- Promo code application triggers dynamic re-rendering of the ticket list
- All API calls include proper error handling with user-friendly error messages
- Console logs are included for debugging purposes (can be removed in production)
