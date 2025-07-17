import React, { useState } from "react";

// Helper: Single Knife Details Section
const KnifeDetails = ({
  knife,
  index,
  handleKnifeChange,
  removeKnife,
  canRemove,
}) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: 16,
      borderRadius: 16,
      marginBottom: 20,
      background: "#fff",
      boxShadow: "0 2px 6px #eee",
    }}
  >
    <h3 style={{ fontWeight: 600, fontSize: 18, marginBottom: 8 }}>
      Knife {index + 1}
      {canRemove && (
        <button
          style={{
            marginLeft: 12,
            color: "#c00",
            border: "none",
            background: "none",
            cursor: "pointer",
          }}
          onClick={() => removeKnife(index)}
        >
          Remove
        </button>
      )}
    </h3>
    <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
      <input
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        type="text"
        placeholder="Knife Name & Model"
        value={knife.name}
        onChange={(e) => handleKnifeChange(index, "name", e.target.value)}
        required
      />
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.sharpened}
        onChange={(e) => handleKnifeChange(index, "sharpened", e.target.value)}
      >
        <option value="">Sharpened?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.used}
        onChange={(e) => handleKnifeChange(index, "used", e.target.value)}
      >
        <option value="">Used to cut?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.carried}
        onChange={(e) => handleKnifeChange(index, "carried", e.target.value)}
      >
        <option value="">Carried?</option>
        <option value="Yes">Yes</option>
        <option value="No">No</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.bladeCondition}
        onChange={(e) =>
          handleKnifeChange(index, "bladeCondition", e.target.value)
        }
      >
        <option value="">Blade Condition</option>
        <option value="Factory edge">Factory edge</option>
        <option value="Sharpened">Sharpened</option>
        <option value="Dull">Dull</option>
        <option value="Chipped">Chipped</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.owners}
        onChange={(e) => handleKnifeChange(index, "owners", e.target.value)}
      >
        <option value="">Number of Owners</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3+">3+</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.centering}
        onChange={(e) => handleKnifeChange(index, "centering", e.target.value)}
      >
        <option value="">Centering</option>
        <option value="Perfect">Perfect</option>
        <option value="Favoring show side">Favoring show side</option>
        <option value="Favoring clip side">Favoring clip side</option>
        <option value="Off-center">Off-center</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        value={knife.lockup}
        onChange={(e) => handleKnifeChange(index, "lockup", e.target.value)}
      >
        <option value="">Lockup</option>
        <option value="Solid">Solid</option>
        <option value="Slight play">Slight play</option>
        <option value="Other">Other (describe below)</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        multiple
        value={knife.issues}
        onChange={(e) =>
          handleKnifeChange(
            index,
            "issues",
            Array.from(e.target.selectedOptions, (o) => o.value)
          )
        }
      >
        <option value="">Visible Issues</option>
        <option value="Scratches">Scratches</option>
        <option value="Snail trails">Snail trails</option>
        <option value="Stains">Stains</option>
        <option value="None">None</option>
      </select>
      <select
        style={{
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          flex: "1 1 200px",
        }}
        multiple
        value={knife.accessories}
        onChange={(e) =>
          handleKnifeChange(
            index,
            "accessories",
            Array.from(e.target.selectedOptions, (o) => o.value)
          )
        }
      >
        <option value="">Accessories Included</option>
        <option value="Original box">Original box</option>
        <option value="Papers">Papers</option>
        <option value="Pouch">Pouch</option>
        <option value="Tool">Tool</option>
        <option value="None">None</option>
      </select>
    </div>
    <textarea
      style={{
        marginTop: 12,
        width: "100%",
        padding: 8,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
      placeholder="Modifications (if any)"
      value={knife.mods}
      onChange={(e) => handleKnifeChange(index, "mods", e.target.value)}
    />
    <textarea
      style={{
        marginTop: 8,
        width: "100%",
        padding: 8,
        border: "1px solid #ccc",
        borderRadius: 8,
      }}
      placeholder="Additional notes or defects"
      value={knife.notes}
      onChange={(e) => handleKnifeChange(index, "notes", e.target.value)}
    />
  </div>
);

// Main App
const initialKnife = {
  name: "",
  sharpened: "",
  used: "",
  carried: "",
  bladeCondition: "",
  owners: "",
  centering: "",
  lockup: "",
  issues: [],
  accessories: [],
  mods: "",
  notes: "",
};

export default function App() {
  const [postType, setPostType] = useState("[WTS]");
  const [flair, setFlair] = useState("junior");
  const [knives, setKnives] = useState([{ ...initialKnife }]);
  const [imgurLink, setImgurLink] = useState("");
  const [payment, setPayment] = useState([]);
  const [shipping, setShipping] = useState("Yes");
  const [fees, setFees] = useState("Yes");
  const [prices, setPrices] = useState([""]);
  const [priceDrop, setPriceDrop] = useState(false);
  const [tradeInterests, setTradeInterests] = useState("");
  const [reason, setReason] = useState("");
  const [states, setStates] = useState([]);
  const [confirmRules, setConfirmRules] = useState(false);

  // Helper functions
  const handleKnifeChange = (index, field, value) => {
    const updated = [...knives];
    updated[index][field] = value;
    setKnives(updated);
  };
  const addKnife = () => {
    setKnives([...knives, { ...initialKnife }]);
    setPrices([...prices, ""]);
  };
  const removeKnife = (index) => {
    if (knives.length > 1) {
      setKnives(knives.filter((_, i) => i !== index));
      setPrices(prices.filter((_, i) => i !== index));
    }
  };
  const handlePriceChange = (index, value) => {
    const updated = [...prices];
    updated[index] = value;
    setPrices(updated);
  };

  // Post generator logic
  const generatePost = () => {
    let out = `### ${postType} `;
    if (knives.length === 1) {
      out += knives[0].name + "\n";
    } else {
      out += knives.map((k) => k.name).join(" / ") + "\n";
    }
    out += `\n**Timestamp/Images:** ${
      imgurLink || "[Insert imgur link here]"
    }\n`;

    knives.forEach((knife, idx) => {
      out += `\n---\n**${knife.name || `Knife ${idx + 1}`}:**\n`;
      out += `- Sharpened: ${knife.sharpened || "N/A"}\n`;
      out += `- Used to cut: ${knife.used || "N/A"}\n`;
      out += `- Carried: ${knife.carried || "N/A"}\n`;
      out += `- Blade condition: ${knife.bladeCondition || "N/A"}\n`;
      out += `- Number of owners: ${knife.owners || "N/A"}\n`;
      out += `- Centering: ${knife.centering || "N/A"}\n`;
      out += `- Lockup: ${knife.lockup || "N/A"}\n`;
      out += `- Visible issues: ${
        knife.issues && knife.issues.length > 0
          ? knife.issues.join(", ")
          : "N/A"
      }\n`;
      out += `- Accessories: ${
        knife.accessories && knife.accessories.length > 0
          ? knife.accessories.join(", ")
          : "N/A"
      }\n`;
      out += knife.mods ? `- Modifications: ${knife.mods}\n` : "";
      out += knife.notes ? `- Additional notes: ${knife.notes}\n` : "";
      if (prices[idx]) out += `- Price: $${prices[idx]}\n`;
    });

    out += `\n**Payment methods accepted:** ${
      payment.length ? payment.join(", ") : "Specify here"
    }\n`;
    out += `**Shipping included?** ${shipping}\n`;
    out += `**Fees included?** ${fees}\n`;
    if (priceDrop) out += "**This is a price drop/repost.**\n";
    if (tradeInterests) out += `**Trade interests:** ${tradeInterests}\n`;
    if (reason) out += `**Reason for sale/trade:** ${reason}\n`;
    if (states.length) out += `**Will NOT ship to:** ${states.join(", ")}\n`;
    out += confirmRules
      ? "\n_I confirm I have read and followed all r/Knife_Swap rules._"
      : "";
    return out;
  };

  // Payment and state options
  const paymentOptions = [
    "PayPal Goods & Services",
    "PayPal Friends & Family",
    "Venmo",
    "Zelle",
    "Other",
  ];
  const stateOptions = ["California", "New York", "International", "Other"];

  return (
    <div
      style={{
        maxWidth: 700,
        margin: "32px auto",
        background: "#f7fafc",
        padding: 32,
        borderRadius: 20,
        boxShadow: "0 2px 12px #eee",
      }}
    >
      <h2 style={{ fontSize: 28, fontWeight: "bold", marginBottom: 20 }}>
        Knife_Swap Post Generator
      </h2>
      {/* Post Type & Flair */}
      <div
        style={{ display: "flex", gap: 18, marginBottom: 20, flexWrap: "wrap" }}
      >
        <label>
          <span style={{ fontWeight: 500, marginRight: 10 }}>Post Type:</span>
          <select
            style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
            value={postType}
            onChange={(e) => setPostType(e.target.value)}
          >
            <option value="[WTS]">[WTS] Sell</option>
            <option value="[WTT]">[WTT] Trade</option>
            <option value="[WTS/WTT]">[WTS/WTT] Sell or Trade</option>
          </select>
        </label>
        <label>
          <span style={{ fontWeight: 500, marginRight: 10 }}>
            Flair Status:
          </span>
          <select
            style={{ padding: 8, borderRadius: 8, border: "1px solid #ccc" }}
            value={flair}
            onChange={(e) => setFlair(e.target.value)}
          >
            <option value="junior">Junior Trader (1 knife per post)</option>
            <option value="established">
              Established Trader (multiple knives)
            </option>
          </select>
        </label>
      </div>
      {/* Knives Section */}
      <div>
        {knives.map((knife, idx) => (
          <div key={idx}>
            <KnifeDetails
              knife={knife}
              index={idx}
              handleKnifeChange={handleKnifeChange}
              removeKnife={removeKnife}
              canRemove={flair === "established" && knives.length > 1}
            />
            {flair === "established" && (
              <input
                style={{
                  marginBottom: 18,
                  padding: 8,
                  border: "1px solid #ccc",
                  borderRadius: 8,
                  width: "50%",
                }}
                type="text"
                placeholder="Price (leave blank for trade only)"
                value={prices[idx] || ""}
                onChange={(e) => handlePriceChange(idx, e.target.value)}
              />
            )}
          </div>
        ))}
        {flair === "established" && (
          <button
            style={{
              background: "#3182ce",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: 10,
              marginTop: 8,
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
            }}
            onClick={addKnife}
            type="button"
          >
            Add Knife
          </button>
        )}
        {flair === "junior" && (
          <input
            style={{
              marginBottom: 18,
              padding: 8,
              border: "1px solid #ccc",
              borderRadius: 8,
              width: "50%",
            }}
            type="text"
            placeholder="Price (leave blank for trade only)"
            value={prices[0] || ""}
            onChange={(e) => handlePriceChange(0, e.target.value)}
          />
        )}
      </div>
      {/* Imgur Link */}
      <input
        style={{
          width: "100%",
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          marginTop: 16,
        }}
        type="text"
        placeholder="Imgur/image link (required)"
        value={imgurLink}
        onChange={(e) => setImgurLink(e.target.value)}
        required
      />
      {/* Payment, Shipping, Fees */}
      <div
        style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 18 }}
      >
        <label style={{ flex: "1 1 240px" }}>
          <span style={{ fontWeight: 500 }}>Payment Methods:</span>
          <select
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid #ccc",
              width: "100%",
            }}
            multiple
            value={payment}
            onChange={(e) =>
              setPayment(Array.from(e.target.selectedOptions, (o) => o.value))
            }
          >
            {paymentOptions.map((p) => (
              <option key={p} value={p}>
                {p}
              </option>
            ))}
          </select>
        </label>
        <label>
          <span style={{ fontWeight: 500 }}>Shipping Included?</span>
          <select
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid #ccc",
              width: "100%",
            }}
            value={shipping}
            onChange={(e) => setShipping(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No (specify in notes)</option>
          </select>
        </label>
        <label>
          <span style={{ fontWeight: 500 }}>Fees Included?</span>
          <select
            style={{
              padding: 8,
              borderRadius: 8,
              border: "1px solid #ccc",
              width: "100%",
            }}
            value={fees}
            onChange={(e) => setFees(e.target.value)}
          >
            <option value="Yes">Yes</option>
            <option value="No">No (specify in notes)</option>
          </select>
        </label>
        <label>
          <span style={{ fontWeight: 500 }}>Price Drop/Repost?</span>
          <input
            style={{ marginLeft: 12 }}
            type="checkbox"
            checked={priceDrop}
            onChange={(e) => setPriceDrop(e.target.checked)}
          />
        </label>
      </div>
      {/* Trade/Reason/States */}
      <textarea
        style={{
          width: "100%",
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          marginTop: 18,
        }}
        placeholder="Trade interests (optional)"
        value={tradeInterests}
        onChange={(e) => setTradeInterests(e.target.value)}
      />
      <textarea
        style={{
          width: "100%",
          padding: 8,
          border: "1px solid #ccc",
          borderRadius: 8,
          marginTop: 8,
        }}
        placeholder="Reason for sale/trade (optional)"
        value={reason}
        onChange={(e) => setReason(e.target.value)}
      />
      <label style={{ display: "block", marginTop: 8 }}>
        <span style={{ fontWeight: 500 }}>
          Prohibited states/countries (optional):
        </span>
        <select
          style={{
            padding: 8,
            borderRadius: 8,
            border: "1px solid #ccc",
            width: "100%",
          }}
          multiple
          value={states}
          onChange={(e) =>
            setStates(Array.from(e.target.selectedOptions, (o) => o.value))
          }
        >
          {stateOptions.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </label>
      <label style={{ display: "block", marginTop: 16 }}>
        <input
          type="checkbox"
          checked={confirmRules}
          onChange={(e) => setConfirmRules(e.target.checked)}
        />{" "}
        I confirm I have read and followed all r/Knife_Swap rules.
      </label>
      {/* Post Output */}
      <div style={{ marginTop: 32 }}>
        <h4 style={{ fontWeight: 700, fontSize: 18, marginBottom: 8 }}>
          Generated Reddit Post:
        </h4>
        <textarea
          style={{
            width: "100%",
            padding: 8,
            border: "1px solid #ccc",
            borderRadius: 8,
            minHeight: 200,
            fontFamily: "monospace",
          }}
          value={generatePost()}
          readOnly
        />
        <button
          style={{
            background: "#38a169",
            color: "#fff",
            padding: "10px 22px",
            borderRadius: 10,
            marginTop: 12,
            border: "none",
            cursor: "pointer",
            fontWeight: 500,
          }}
          onClick={() => {
            navigator.clipboard.writeText(generatePost());
            alert("Post copied to clipboard!");
          }}
        >
          Copy to Clipboard
        </button>
      </div>
    </div>
  );
}
