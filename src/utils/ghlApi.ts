
interface GHLContact {
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  companyName?: string;
  source?: string;
  tags?: string[];
}

interface GHLApiConfig {
  apiKey: string;
  locationId: string;
}

export const submitLeadToGHL = async (
  leadData: {
    firstName: string;
    lastName: string;
    businessName: string;
    email: string;
    phone: string;
  },
  config: GHLApiConfig
) => {
  const ghlContact: GHLContact = {
    firstName: leadData.firstName,
    lastName: leadData.lastName,
    name: `${leadData.firstName} ${leadData.lastName}`,
    email: leadData.email,
    phone: leadData.phone,
    companyName: leadData.businessName,
    source: 'Sintra Business Website',
    tags: ['Website Lead', 'AI Solutions']
  };

  const response = await fetch(`https://services.leadconnectorhq.com/contacts/`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${config.apiKey}`,
      'Content-Type': 'application/json',
      'Version': '2021-07-28'
    },
    body: JSON.stringify({
      ...ghlContact,
      locationId: config.locationId
    })
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(`GHL API Error: ${response.status} - ${errorData.message || 'Unknown error'}`);
  }

  return await response.json();
};
