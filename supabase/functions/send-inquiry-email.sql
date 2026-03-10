-- Create a function to send email notifications
CREATE OR REPLACE FUNCTION send_inquiry_email()
RETURNS TRIGGER AS $$
DECLARE
  recipient_email TEXT := 'sales@visukaminerals.com';
  subject TEXT;
  html_content TEXT;
BEGIN
  -- Create email subject
  subject := 'New Sales Inquiry from ' || NEW.name || ' - ' || NEW.company;
  
  -- Create HTML email content
  html_content := '
    <h2>New Sales Inquiry</h2>
    <p><strong>Name:</strong> ' || NEW.name || '</p>
    <p><strong>Company:</strong> ' || NEW.company || '</p>
    <p><strong>Email:</strong> ' || NEW.email || '</p>
    <p><strong>Phone:</strong> ' || NEW.phone || '</p>
    <p><strong>Product Interest:</strong> ' || NEW.product_interest || '</p>
    <p><strong>Message:</strong></p>
    <p>' || NEW.message || '</p>
    <p><em>Submitted on: ' || NEW.created_at || '</em></p>
  ';
  
  -- Send email using Supabase's built-in email function
  -- Note: This requires Supabase Auth email to be configured
  PERFORM auth.send_email(
    recipient_email,
    subject,
    html_content,
    'text/html'
  );
  
  RETURN NEW;
EXCEPTION WHEN OTHERS THEN
  -- Log error but don't fail the insert
  RAISE LOG 'Failed to send inquiry email: %', SQLERRM;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically send email on new inquiry
CREATE TRIGGER inquiry_email_trigger
AFTER INSERT ON inquiries
FOR EACH ROW
EXECUTE FUNCTION send_inquiry_email();
