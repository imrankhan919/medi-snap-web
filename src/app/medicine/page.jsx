import React from 'react'

const page = () => {
    // Sample data structure based on API response
    const defaultData = {
        medicine_name: "Paracetamol 500mg",
        uses: "Pain relief, fever reduction, headache, muscle aches, arthritis, backaches, toothaches, colds, and fevers",
        side_effects: "Nausea, stomach pain, loss of appetite, itching, rash, headache, dark urine (rare but serious)",
        dosage: "Adults: 500-1000mg every 4-6 hours. Maximum 4000mg per day. Children: Consult physician for proper dosing",
        manufacturer: "PharmaCorp Ltd.",
        precautions: "Do not exceed recommended dose. Avoid alcohol consumption. Consult doctor if pregnant or breastfeeding. Not suitable for children under 2 years",
        expiry_date: "2025-12-31",
        composition: "Each tablet contains: Paracetamol 500mg, Microcrystalline cellulose, Starch, Povidone, Magnesium stearate"
    };

    const data = defaultData;

    const formatExpiryDate = (dateString) => {
        if (!dateString) return "Not specified";
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    const isExpiringSoon = (dateString) => {
        if (!dateString) return false;
        const expiryDate = new Date(dateString);
        const today = new Date();
        const sixMonthsFromNow = new Date();
        sixMonthsFromNow.setMonth(today.getMonth() + 6);
        return expiryDate <= sixMonthsFromNow;
    };

    return (
        <div className="min-h-screen bg-background p-4 md:p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header Section */}
                <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6 mb-6">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-card-foreground mb-2">
                                {data.medicine_name || "Medicine Name Not Available"}
                            </h1>
                            <p className="text-muted-foreground">
                                Manufactured by {data.manufacturer || "Unknown Manufacturer"}
                            </p>
                        </div>
                        <div className="text-right">
                            <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${isExpiringSoon(data.expiry_date)
                                ? 'bg-destructive/10 text-destructive border border-destructive/20'
                                : 'bg-primary/10 text-primary border border-primary/20'
                                }`}>
                                {isExpiringSoon(data.expiry_date) ? '⚠️ Expires Soon' : '✓ Valid'}
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                                Expires: {formatExpiryDate(data.expiry_date)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Main Content Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {/* Uses Section */}
                    <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                                <span className="text-primary text-lg">💊</span>
                            </div>
                            <h2 className="text-xl font-semibold text-card-foreground">Uses</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {data.uses || "No usage information available"}
                        </p>
                    </div>

                    {/* Dosage Section */}
                    <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                                <span className="text-accent-foreground text-lg">📏</span>
                            </div>
                            <h2 className="text-xl font-semibold text-card-foreground">Dosage</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {data.dosage || "No dosage information available"}
                        </p>
                    </div>

                    {/* Side Effects Section */}
                    <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-destructive/10 rounded-lg flex items-center justify-center">
                                <span className="text-destructive text-lg">⚠️</span>
                            </div>
                            <h2 className="text-xl font-semibold text-card-foreground">Side Effects</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {data.side_effects || "No side effects information available"}
                        </p>
                    </div>

                    {/* Precautions Section */}
                    <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 bg-secondary/10 rounded-lg flex items-center justify-center">
                                <span className="text-secondary-foreground text-lg">🛡️</span>
                            </div>
                            <h2 className="text-xl font-semibold text-card-foreground">Precautions</h2>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                            {data.precautions || "No precautions information available"}
                        </p>
                    </div>
                </div>

                {/* Composition Section - Full Width */}
                <div className="bg-card rounded-lg shadow-sm border border-gray-200 p-6 mt-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                            <span className="text-primary text-lg">🧪</span>
                        </div>
                        <h2 className="text-xl font-semibold text-card-foreground">Composition</h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                        {data.composition || "No composition information available"}
                    </p>
                </div>

                {/* Footer Disclaimer */}
                <div className="bg-muted/50 rounded-lg border border-gray-200 p-4 mt-6">
                    <p className="text-sm text-muted-foreground text-center">
                        <strong>Disclaimer:</strong> This information is for educational purposes only.
                        Always consult with a healthcare professional before taking any medication.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default page
