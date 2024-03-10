// Error logging system
const errorLogging = {
    logError: function(errorCode, errorMessage, timestamp) {
        const newError = {
            code: errorCode,
            message: errorMessage,
            timestamp: timestamp || new Date()
        };
        this.errors.push(newError);
    },
    errors: [],
    viewErrorLog: function() {
        console.log("Viewing error log...");
        if (this.errors.length === 0) {
            console.log("No errors logged.");
        } else {
            this.errors.forEach(error => {
                console.log(`${error.timestamp}: [${error.code}] ${error.message}`);
            });
        }
    },
    resolveIssue: function(errorIndex) {
        console.log(`Resolving issue at index ${errorIndex}...`);
        if (errorIndex >= 0 && errorIndex < this.errors.length) {
            console.log(`Issue resolved: [${this.errors[errorIndex].code}] ${this.errors[errorIndex].message}`);
            this.errors.splice(errorIndex, 1);
        } else {
            console.log("Invalid error index.");
        }
    }
};

// Simulate error logging
errorLogging.logError("ERR001", "Internal server error occurred.");
errorLogging.logError("ERR002", "Database connection failed.");
errorLogging.logError("ERR003", "Invalid input received from user.");

// Example usage
errorLogging.viewErrorLog();  // Output: Viewing error log...
                              // Output: 2024-03-07T12:00:00Z: [ERR001] Internal server error occurred.
                              // Output: 2024-03-07T12:00:00Z: [ERR002] Database connection failed.
                              // Output: 2024-03-07T12:00:00Z: [ERR003] Invalid input received from user.
errorLogging.resolveIssue(1);  // Output: Resolving issue at index 1...
                                // Output: Issue resolved: [ERR002] Database connection failed.
errorLogging.viewErrorLog();  // Output: Viewing error log...
                              // Output: 2024-03-07T12:00:00Z: [ERR001] Internal server error occurred.
                              // Output: 2024-03-07T12:00:00Z: [ERR003] Invalid input received from user.