Place the logo image in this folder so it can be served from the public root:

- Expected path: public/images/virsa-channel.png
- URL at runtime: /images/virsa-channel.png
- Recommended size: 200x200 (square) or adjust CSS in `src/components/Header.jsx`.

PowerShell example to copy the image into place from Downloads:

Copy-Item -Path "$env:USERPROFILE\Downloads\virsa-channel.png" -Destination "$(pwd)\public\images\virsa-channel.png"

If you run into a 404 for the image, make sure the file exists at the path above and restart the dev server if necessary.