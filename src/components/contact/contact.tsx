import * as React from "react";
import * as classnames from "classnames";
import Icon, { IconSymbol, IconSize } from "../icon/icon";

export type ContactType = {
  type: IconSymbol;
  link: string;
};

export type ContactProps = {
  contacts: ContactType[];
  size?: IconSize;
  className?: string;
};

const renderContact = (contacts: ContactType[], size: IconSize = "5") => {
  return contacts.map((contact) => {
    const styles = classnames.default(
      `folio-contact--item-${contact}`,
      "folio-contact--item",
    );
    return (
      <div key={contact.type} className={styles}>
        <Icon size={size} symbol={contact.type} />
      </div>
    );
  });
};

const Contact: React.FC<ContactProps> = (props) => {
  const { size, contacts, className } = props;

  const styles = classnames.default(
    "folio-contact",
    `folio-contact--${size}`,
    className,
  );

  return <div className={styles}>{renderContact(contacts, size)}</div>;
};

Contact.defaultProps = {
  size: "5",
  className: "",
};

export default Contact;
