<?xml version="1.0"?>

<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:template match="/">
  <html>
  <body>
    <h2>Perks Blackout</h2>
    <table border="1">
      <tr bgcolor="#9acd32">
        <th>Nome</th>
        <th>Descrizione</th>
      </tr>
      <xsl:for-each select="perks/perk">
        <tr>
          <td><xsl:value-of select="nome"/></td>
          <td><xsl:value-of select="descrizione"/></td>
        </tr>
      </xsl:for-each>
    </table>
  </body>
  </html>
</xsl:template>

</xsl:stylesheet>