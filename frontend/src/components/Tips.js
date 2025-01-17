import React from 'react'

function Tips() {
  return (
    <div>
              
      {/* Fetch the from the backend and display them here
             Every 15 seconds, tips of different waste types
             are displayed.
          */}

      <div className='tips' >
        <p>
                "Sort by Purity: Separate pure copper from copper alloys to maximize its recycling value.",
                "Strip Wires: Remove insulation from copper wires before taking them to a recycling center.",
                "Avoid Corrosion: Store scrap copper in a dry area to prevent corrosion, which can reduce its recycling potential.",
                "Sell Scrap Copper: Collect and sell copper scraps like pipes, wires, or fittings to a scrap dealer.",
                "Reuse for Projects: Repurpose copper scraps for artistic or functional projects, such as making jewelry or home décor items."
                "Rinse and Remove Caps: Clean glass bottles and jars, and remove lids or caps before recycling.",
                "Avoid Mixing Colors: Keep clear, green, and brown glass separated if required by your local facility.",
                "Don’t Recycle Broken Glass: Dispose of broken glass responsibly, as it can pose safety hazards and might not be recyclable.",
                "Check for Coatings: Do not recycle glass with non-recyclable coatings like mirrors, ceramics, or Pyrex.",
                "Repurpose Jars: Reuse glass jars for storage or DIY projects before recycling."
                "Separate Metals: Sort different types of metals (aluminum, steel, etc.) to help recyclers process them more efficiently.",
                "Remove Non-Metal Attachments: Take off any plastic, rubber, or wood parts attached to metal items.",
                "Scrap Large Items: For bulky metal items, contact a scrap metal recycler instead of tossing them in regular recycling.",
                "Clean Metals: Wipe or rinse off grease, oil, or other contaminants.",
                "Sell Valuable Metals: Sell high-value metals like brass or stainless steel to scrap yards for extra income."
                "Check the Recycling Code: Only recycle plastics with acceptable codes in your local recycling program.",
                "Rinse and Dry: Wash plastic bottles and containers to avoid contamination.",
                "Remove Caps and Labels: Separate caps and labels from bottles if required by your recycling center.",
                "Don’t Crush Bottles: Keep bottles in their original shape unless otherwise specified, as crushing may hinder sorting.",
                "Reuse Plastic Bags: Use plastic bags multiple times before recycling them at designated drop-off points."
                "Clean Before Recycling: Rinse tin cans to remove any food residue before placing them in the recycling bin.",
                "Remove Labels: Peel off paper labels to ensure cleaner recycling processes.",
                "Flatten Cans: Flatten tin cans to save space in your recycling bin.",
                "Avoid Mixing with Non-Recyclables: Keep tin separate from other materials like plastic lids or food waste.",
                "Repurpose Creatively: Use tin cans as storage containers, planters, or craft materials before recycling."
        </p>
      </div>
      <div className='images'>
                
        {/* A slide of different waste pictures displayed here to raise awareness */}

      </div>
    </div>
  )
}

export default Tips