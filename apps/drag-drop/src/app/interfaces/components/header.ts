
enum HeaderTheme{
    Primary = 'Primary',
    Secondary = 'Secondary',
}

export interface Header {
    /**
     * Text to display in label
     * @TJS-type string
     */
    text: string
    /**
     * Theme Style for Header
     * @default Primary 
     */
    theme: HeaderTheme
  }
  