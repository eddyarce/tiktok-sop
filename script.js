document.addEventListener('DOMContentLoaded', function() {
    // Initialize Lucide icons
    lucide.createIcons();
    
    // Define sections data
    const sections = [
        {
            title: "Product Research",
            icon: "bookmark",
            color: "bg-blue-100 border-blue-400",
            titleColor: "bg-blue-500",
            content: `
                <div>
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-2">Objective</h3>
                        <p>Find profitable products to feature in our TikTok shop videos.</p>
                    </div>
                    
                    <div class="mb-4">
                        <h3 class="font-bold text-lg mb-2">Process</h3>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 1: Find Potential Products</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Go to Kalodata.com</li>
                                <li>Navigate to Explore Tab</li>
                                <li>Scroll to "Top Products" and click "More"</li>
                                <li>Filter by Items Sold in the last 7 days</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 2: Apply Selection Criteria</h4>
                            <p class="mb-2 font-medium">A product MUST meet ALL these requirements:</p>
                            <ul class="space-y-1">
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Conversion rate &gt; 8%</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> At least 10+ sales in the period</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Price range $15-50 (good impulse buy range)</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Visual appeal (product must look good in video)</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Clear value proposition (easy to explain in 5-7 seconds)</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 3: Get Pricing & Offer Details</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Open TikTok app on your phone</li>
                                <li>Go to "shop" tab</li>
                                <li>Search for the product</li>
                                <li>Note current price and any special offers</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 4: Select Hook Template</h4>
                            <p class="mb-2">Choose one of these templates and fill in the information:</p>
                            
                            <div class="bg-gray-50 p-4 rounded-md border border-gray-200 mb-3">
                                <p class="font-medium mb-1">Price Drop/Sale Templates:</p>
                                <ol class="list-decimal pl-5 space-y-1">
                                    <li>"When I realize I spent $[original price] on [product] and now it's only $[sale price] plus free shipping 😭"</li>
                                    <li>"Condolences to the employee that dropped the price of [product] to only [price] Pennie's (you getting fired) plus free shipping😭"</li>
                                    <li>"Truly sorry to anyone who bought [product] because the price got lowered from $[original] to $[sale price]"</li>
                                    <li>"I feel bad for anyone that spent $[original price] on [product] because it's only $[sale price] now 😮"</li>
                                    <li>"🤡: The perfect [product category] doesn't exist..."</li>
                                    <li>"When I realize I spent $[original price] on [product] and now they are [X%] off 😭"</li>
                                    <li>"When I realize I spent $[original price] on this [product] and now it's $[sale price] and free shipping 😭"</li>
                                </ol>
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 5: Get Product Image</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Find a clear front-facing image of the product on Kalodata</li>
                                <li>Right-click and "save as" the image</li>
                                <li>Upload to the Product Images Drive</li>
                                <li>Name the file the same as the product</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 6: Update Sheet & Notify</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Add the product image link to the Research Sheet</li>
                                <li>Change status to "Ready for AI"</li>
                                <li>Notify the AI person that the product is ready</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "AI Video Creation",
            icon: "video",
            color: "bg-purple-100 border-purple-400",
            titleColor: "bg-purple-500",
            content: `
                <div>
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-2">Objective</h3>
                        <p>Create professional AI-generated product videos and select appropriate avatars.</p>
                    </div>
                    
                    <div class="mb-4">
                        <h3 class="font-bold text-lg mb-2">Process</h3>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 1: Generate Product Video</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Download the product image from the research sheet</li>
                                <li>Go to Klingai.com</li>
                                <li>Click "AI Videos"</li>
                                <li>Ensure you're on the "image to video" tab</li>
                                <li>Upload the product image</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 2: Set Up Video Generation</h4>
                            <p class="mb-2">Choose the appropriate template:</p>
                            
                            <div class="bg-gray-50 p-4 rounded-md border border-gray-200 mb-3">
                                <p class="font-medium mb-1">For supplements or small products:</p>
                                <p class="text-sm text-gray-700">
                                    Cinematic POV shot slowly approaching a [PRODUCT] placed on a luxury white/gray marble countertop in a modern kitchen. The camera movement should mimic someone walking toward the product while recording on an iPhone, with a slight handheld camera motion. The [PRODUCT] is positioned to highlight its best features with its branding/design clearly visible on the elegant marble surface. Soft, ambient lighting creates a premium atmosphere. The final frame should feature the product prominently in the center with the beautiful kitchen.
                                </p>
                            </div>
                            
                            <div class="flex items-start mb-2">
                                <i data-lucide="alert-triangle" class="text-amber-500 mr-2 mt-1 flex-shrink-0 w-5 h-5"></i>
                                <p class="text-sm"><strong>IMPORTANT:</strong> Replace [PRODUCT] with the actual product name</p>
                            </div>
                            
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Select "Standard Mode"</li>
                                <li>Set Duration to 5 seconds</li>
                                <li>Set aspect ratio to 9:16</li>
                                <li>Set Generating Count to 1</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 3: Add Negative Prompt</h4>
                            <p class="mb-2">Copy and paste this EXACT text into the negative prompt field:</p>
                            <div class="bg-gray-50 p-4 rounded-md border border-gray-200 mb-3 text-sm text-gray-700">
                                No text overlays or UI elements. Artifacts, Deformed, Low Quality, Multiple Appendages, Grainy, deformed teeth, three legs deformed hands Blurry, Distorted, Pixelated, Anime-like, Cartoonish, Static Flat, Out of Focus, Unclear, Oversatured, Fuzzy, Foggy, Warped, Still, Morphing, Error-Prone, Slow, Low Resolution, Unrefined, Undefined, Frozen, quick movement Blur, disfigurement, blur, bad face, humans.
                            </div>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 4: Review and Download</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Check that no people appear in the final video</li>
                                <li>Download WITHOUT the watermark</li>
                                <li>Upload to AI Product Videos Drive</li>
                                <li>Name it based on the product name</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 5: Select Avatar</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Go to AI Avatar Folder</li>
                                <li>Select avatar based on product target audience:</li>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Female product → Female avatar</li>
                                    <li>Male product → Male avatar</li>
                                    <li>Unisex product → Either gender</li>
                                    <li>For older audience → Older avatar</li>
                                    <li>If unsure, ask manager</li>
                                </ul>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 6: Update Sheet & Notify</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Change status on AI sheet to "AI"</li>
                                <li>Go to editor sheet and fill in:</li>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Product Name</li>
                                    <li>Version number (1, 2, or 3)</li>
                                    <li>Hook from research tab</li>
                                    <li>Background sound (from most recent month)</li>
                                    <li>AI Product Video link</li>
                                    <li>AI Avatar link</li>
                                    <li>Editor name</li>
                                </ul>
                                <li>Change status to "In Queue"</li>
                                <li>Ping the assigned editor</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Video Editing",
            icon: "video",
            color: "bg-green-100 border-green-400",
            titleColor: "bg-green-500",
            content: `
                <div>
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-2">Objective</h3>
                        <p>Combine AI product video with avatar and hook text to create engaging content.</p>
                    </div>
                    
                    <div class="mb-4">
                        <h3 class="font-bold text-lg mb-2">Process</h3>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 1: Prepare Assets</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Find videos assigned to you in the sheet</li>
                                <li>Change status from "In Queue" to "In Progress"</li>
                                <li>Download:</li>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>AI product video</li>
                                    <li>AI avatar video</li>
                                    <li>Background sound</li>
                                </ul>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 2: Edit in CapCut</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Go to CapCut.com and sign into main account</li>
                                <li>Create a New Project (9:16 aspect ratio)</li>
                                <li>Upload all assets</li>
                                <li>Add clips and audio to timeline</li>
                                <li>If audio is too short, duplicate and trim end</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 3: Add Hook Text</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Click "text" > Add Heading</li>
                                <li>Select white background with black text</li>
                                <li>Paste hook from the sheet</li>
                                <li>Position above avatar's head (not blocking face)</li>
                                <li>Resize if needed</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 4: Finalize Video</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Adjust AI avatar to around 3 seconds</li>
                                <li>Capture facial expression change</li>
                                <li>Crop out any Kling AI watermarks</li>
                                <li>Save with correct name format:</li>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Product Name - VersionNumber - date</li>
                                    <li>Example: Yerba Magic - V1 - 02/26/25</li>
                                </ul>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 5: Export and Share</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Export with default settings</li>
                                <li>Upload to Final Videos folder</li>
                                <li>Share link (set to "anyone with link is viewer")</li>
                                <li>Add link to Editors sheet</li>
                                <li>Mark as "Ready for Review"</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 6: Handle Revisions</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Make any changes requested by QC</li>
                                <li>Re-upload revised video</li>
                                <li>Add link under "Revised Video Link"</li>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Quality Control",
            icon: "check-circle",
            color: "bg-amber-100 border-amber-400",
            titleColor: "bg-amber-500",
            content: `
                <div>
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-2">Objective</h3>
                        <p>Ensure all videos meet quality standards before posting.</p>
                    </div>
                    
                    <div class="mb-4">
                        <h3 class="font-bold text-lg mb-2">Process</h3>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 1: Initial Check</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>When videos are marked "Ready for Review", change to "Under QC Review"</li>
                                <li>Download the video</li>
                                <li>Verify naming convention: Product Name - VersionNumber - date</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 2: Technical Assessment</h4>
                            <ul class="space-y-1">
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Video resolution (clear, not pixelated)</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Audio synced properly throughout</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Aspect ratio is 9:16</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> No watermarks visible</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> No rendering errors or glitches</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 3: Content Verification</h4>
                            <ul class="space-y-1">
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Correct product shown</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Avatar matches target demographic</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Hook follows template with accurate pricing</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Background sound matches specification</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 4: Marketing Effectiveness</h4>
                            <ul class="space-y-1">
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Hook text positioned properly</li>
                                <li class="flex items-center"><i data-lucide="check-circle" class="text-green-500 mr-2 w-5 h-5"></i> Avatar reaction timing aligns with product reveal</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 5: Decision & Documentation</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>If approved: Mark as "Ready to Post"</li>
                                <li>If minor issues: Note specific timestamps and elements to fix</li>
                                <li>If major issues: Reject with detailed explanation</li>
                                <li>Add QC completion date/time</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 6: Communication</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>Notify editor of result</li>
                                <li>Provide clear revision instructions if needed</li>
                                <li>Notify poster when videos are approved</li>
                            </ul>
                        </div>
                        
                        <div class="mb-4">
                            <h4 class="font-bold mb-2">Step 7: Final Steps</h4>
                            <ul class="list-disc pl-5 space-y-1">
                                <li>After revisions, verify changes implemented correctly</li>
                                <li>Update status to "Final Approval"</li>
                                <li>Transfer to Poster Sheet:</li>
                                <ul class="list-disc pl-5 space-y-1">
                                    <li>Copy product name</li>
                                    <li>Verify version number</li>
                                    <li>Add final video link</li>
                                    <li>Notify poster via telegram</li>
                                </ul>
                            </ul>
                        </div>
                    </div>
                </div>
            `
        },
        {
            title: "Video Posting",
            icon: "clock",
            color: "bg-red-100 border-red-400",
            titleColor: "bg-red-500",
            content: `
                <div>
                    <div class="mb-6">
                        <h3 class="font-bold text-lg mb-2">Objective</h3>
                        <p>Post videos according to schedule and track performance.</p>
                    </div>
                    
                    <div
